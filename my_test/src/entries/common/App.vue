<template>
  <div
    id="app"
    :class="{ 'yn-scrollbar-sm': designerRt, 'designer-rt': designerRt }"
  >
    <yn-spin :spinning="spinning" size="large">
      <yn-locale-provider :locale="getLocale()">
        <router-view></router-view>
      </yn-locale-provider>
    </yn-spin>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";
import {
  DashboardKey,
  SysKey
} from "@/views/applications/default/config/commonConst.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";
import UrlUtils from "yn-p1/libs/utils/UrlUtils";
import SecurityUtils from "yn-p1/libs/utils/SecurityUtils";
import zh_CN from "yn-p1/libs/assets/platform/local/zh_CN";
import en_US from "yn-p1/libs/assets/platform/local/en_US";
import YnUiUtils from "yn-p1/libs/utils/UiUtils";
import DsUtils from "yn-p1/libs/utils/DsUtils";
import { setLanguage } from "yn-p1/libs/utils/AppUtils";
import RouterUtils from "yn-p1/libs/utils/RouterUtils";
import UiUtils from "yn-p1-designer/libs/views/applications/utils/UiUtils.js";
import { getEcsId } from "yn-p1-designer/libs/views/applications/ecs_utils/aes.js";
import GlobalLocale from "yn-p1-designer/libs/entries/common/globalLocale";
import "yn-p1/libs/components/yn-spin/";
import "yn-p1/libs/components/yn-locale-provider/";
import "yn-p1/libs/themes/style/yn-app.less";

const getQueryString = (name, url) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  url = url.split("?")[1];
  let r = url && url.match(reg);
  if (r) {
    return unescape(r[2]);
  }
};

// 默认语种
const LOCALE_CODE = "zh_CN";
// 组件多语言语包映射，目前只包含中文和英文
const LANGUAGE_MAP = {
  zh_CN,
  en_US
};

// 多语言语种和moment包映射关系，目前只包含中文和英文
const LANGUAGE_MOMENT_MAP = {
  zh_CN: "zh-cn",
  en_US: "en-gb"
};
// 向父窗口推送数据
const postMessage = (message = "", actionType = "loginOut", data = null) => {
  let messageData = {
    source: "", // 消息来源
    actionType: actionType, // loginOut失效跳转登陆页
    messageText: message || "",
    messageType: "success", // success, error, warning 根据实际情况选择支持
    data: data // 额外返回数据，暂时无用，根据实际情况选择支持
  };
  window.parent.postMessage(JSON.stringify(messageData), "*");
};
export default {
  name: "app",
  data() {
    return {
      screenWidth: 0,
      spinning:
        window.location.pathname.includes("designer_rt") ||
        this.$route.path === "/pageDesigner_rt",
      localeCode: LOCALE_CODE
    };
  },
  beforeCreate() {
    let BACKEND = getBackend();
    DsUtils.addGlobalRequestInterceptor(
      config => {
        let theHeaders = DsUtils.getSessionStorageItem(SysKey, {
          storagePrefix: DashboardKey,
          isJson: true
        });
        let { headers, url } = config;
        if (
          !(
            Object.keys(BACKEND).find(key => {
              return BACKEND[key] && url.includes(BACKEND[key]);
            }) || !/^\s*http/i.test(url)
          )
        )
          return config;
        const isServiceNameIgnore =
          sessionStorage.getItem("debug_ignore") === "true";
        const debugConsoleServer = sessionStorage.getItem(
          "debug_console_server"
        );
        if (theHeaders.appId !== "ecs") {
          //1.0使用了appId=ecs
          !/^\s*http/i.test(url) && (url = BACKEND.BASE_URL_INIT + url);
          let nowBaseUrl = ""; //当前使用的baseUrl
          let suffixUrl = ""; //剩余URL部分
          for (let item of Object.values(BACKEND)) {
            if (url.indexOf(item) > -1) {
              nowBaseUrl = item;
              suffixUrl = url.split(nowBaseUrl)[1];
              break;
            }
          }
          let ServiceName;
          if (isServiceNameIgnore) {
            ServiceName = "";
          } else {
            ServiceName = headers.ServiceName;
            ServiceName || (ServiceName = getQueryString("ServiceName", url));
            const sessionServiceName = (
              DsUtils.getSessionStorageItem(SysKey, {
                storagePrefix: DashboardKey,
                isJson: true
              }) || {}
            ).ServiceName;
            ServiceName ||
              (ServiceName =
                sessionServiceName &&
                (typeof sessionServiceName === "string"
                  ? sessionServiceName
                  : sessionServiceName[0]));
            ServiceName || (ServiceName = UrlUtils.getQuery("serviceName"));
            if (ServiceName) ServiceName += "/";
          }
          // 控制台接口调试模式，使用控制台调试地址
          if (headers.ServiceName === "console" && debugConsoleServer) {
            url = debugConsoleServer + ServiceName + suffixUrl;
          } else if (ServiceName) {
            url =
              (nowBaseUrl.match(/(\w+):\/\/([^/:]+)(:\d*)?\//) || [])[0] +
              ServiceName +
              suffixUrl;
          } else {
            // 无serviceName，直接拼接baseUrl
            url = nowBaseUrl + suffixUrl;
          }
          config.url = url;
        }
        if (theHeaders && theHeaders.token) {
          theHeaders.loginName && (headers.loginName = theHeaders.loginName);
          headers.token = theHeaders.token;
          headers.LoginToken = theHeaders.token;
          headers.MenuId = "designerMenu";
          theHeaders.projectCode &&
            (headers.projectCode = theHeaders.projectCode);
          !headers.ServiceName &&
            theHeaders.ServiceName &&
            (headers.ServiceName = theHeaders.ServiceName);
          theHeaders.appId && (headers.appId = theHeaders.appId); // 此appId为控制台传过来的
          theHeaders.lang && (headers.lang = theHeaders.lang);
          // ecs1.0的校验id
          let onOff = UrlUtils.getQuery("onOff");
          if (onOff === "true") {
            let id = getEcsId(
              theHeaders.token,
              config.url,
              config.data || config.params,
              config.headers["Content-Type"],
              config.method,
              !!config.params,
              config
            );
            headers.eicds = id;
          }
          if (theHeaders.securityFlag && theHeaders.securityFlag === "true") {
            let sha = SecurityUtils.getShaId(
              theHeaders.timeDelta,
              theHeaders.token,
              config.url,
              config.data || config.params,
              config.headers["Content-Type"],
              config.method,
              !!config.params,
              config
            );
            let { stid, Timestamp } = sha;
            config.headers.stid = stid;
            config.headers.Timestamp = Timestamp;
          }
        }
        return config;
      },
      err => DsUtils.axiosErrorHandler(err)
    );
    DsUtils.addGlobalResponseInterceptor(
      response => {
        // 根据请求头的信息判断是否需要提示接口返回的message，默认显示，例如：上传附件不需要提示，有进度条
        const header = (response && response.config.headers) || {};
        const showMessage = header.showMessage === false ? false : true;
        return DsUtils.axiosResponseHandler(response, {
          showSuccessMsg: showMessage
        }).catch(err => {
          let theHeaders = DsUtils.getSessionStorageItem(SysKey, {
            storagePrefix: DashboardKey,
            isJson: true
          });
          let { response } = err;
          let { headers } = response || {};
          if (
            response &&
            headers &&
            headers.loginstatus &&
            headers.loginstatus === "Time-Out"
          ) {
            YnUiUtils.errorMessage("登录已失效，请重新登录");
            DsUtils.clearSessionStorageItem();
            // 编辑插件，登录失效，不返回登录页面
            let curRoute = RouterUtils.getCurRoute();
            if (curRoute.path.match(/plugin_code/)) return;
            // 兼容origin参数登出
            if (
              theHeaders &&
              ((theHeaders.logoutTargetUrl && theHeaders.logoutTargetUrl) !==
                "undefined" ||
                (theHeaders.origin && theHeaders.origin !== "undefined"))
            ) {
              let logoutUrl =
                theHeaders.logoutTargetUrl &&
                theHeaders.logoutTargetUrl !== "undefined"
                  ? theHeaders.logoutTargetUrl
                  : theHeaders.origin;
              try {
                window.top.location.replace(logoutUrl);
              } catch (error) {
                window.location.replace(logoutUrl);
              }
            } else {
              postMessage("", "loginOut", "");
            }
          }
        });
      },
      error => {
        let { response } = error;
        if (!response) {
          // eslint-disable-next-line no-console
          console.error(error);
          return;
        }
        let { status } = response;
        const header = (response && response.config.headers) || {};
        if (status === 412) {
          return Promise.reject({
            status: status || 500,
            data: null,
            error: response,
            message: response.message
          });
        } else {
          return DsUtils.axiosErrorHandler(
            error,
            {},
            header.showErrorMsg
          ).catch(err => {
            return Promise.reject({
              status: err.status || 500,
              data: null,
              error: err,
              message: err.message
            });
          });
        }
      }
    );
    // DsUtils.init(BACKEND.BASE_URL_INIT, APPS.NAME); //前置到main.ts 初始化，方便处理session 数据隔离
    YnUiUtils.init(this);
    RouterUtils.init(this);
    // 获取路由中 公共的系统参数，主要包含 loginName token  projectCode
  },
  created() {
    let headers =
      DsUtils.getSessionStorageItem(SysKey, {
        storagePrefix: DashboardKey,
        isJson: true
      }) || {};
    let language = headers.lang || LOCALE_CODE;
    this.localeCode = language;
    // 设置全局多语言语种，可全局调用
    setLanguage && setLanguage(language);
    // 设置全局日期组件多语言
    moment.locale(LANGUAGE_MOMENT_MAP[language]);
    GlobalLocale.setLocale(LANGUAGE_MAP[language]);
  },
  methods: {
    getLocale() {
      return LANGUAGE_MAP[this.localeCode];
    },
    setWidth() {
      this.screenWidth = document.body.offsetWidth;
    },
    hashchange() {
      let currentPath = window.location.hash.slice(1);
      if (this.$route.path !== currentPath) {
        // 用push的话history里会多一条记录
        this.$router.replace(currentPath);
      }
    }
  },
  mounted() {
    let that = this;
    that.setWidth();
    window.addEventListener("resize", that.setWidth);
    // 处理ie直接修改url跳转不生效的问题
    if (UiUtils.getBrowserType() === "IE") {
      window.addEventListener("hashchange", this.hashchange);
    }
  },
  computed: {
    designerRt() {
      if (window.location.pathname.includes("designer_rt")) {
        return true;
      }
      if (this.$route.path === "/pageDesigner_rt") {
        return true;
      }
      return false;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
    window.removeEventListener("hashchange", this.hashchange);
  }
};
</script>

<style lang="less">
@import "../../themes/theme_var.less";
.page-designer > #components-layout-demo-custom-trigger {
  overflow: hidden;
}
i.anticon > svg {
  width: 1 em;
  height: 1 em;
  vertical-align: -0.15 em;
  fill: currentColor;
  overflow: hidden;
}
#app > .ant-spin-nested-loading > div > .ant-spin {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // 全局loading，最高层级
  z-index: 9999999999 !important;
  max-height: none !important;
  & > .ant-spin-dot {
    transform: translate(-50%, -50%);
    margin: 0 !important;
  }
}
body,
html {
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Emoji";
  }
  overflow: auto;
}

body.page-designer-overflow-lock {
  overflow: auto !important;
  &.in-print-time {
    overflow: unset !important;
  }
}
body.in-print-time {
  overflow: unset !important;
}

#app .ant-spin-blur {
  opacity: 1;
}
#app .ant-spin-blur::after {
  opacity: 0;
}

#app .ant-collapse-borderless > .ant-collapse-item {
  border-bottom: 1px solid @yn-border-color-base;
}

#app .vdr {
  border: 0 none;
  box-sizing: content-box;
}

#app .vdr.active.draggable.resizable {
  border: 1px solid #93c4f8;
}

#app .full-screen .vdr.active.draggable.resizable {
  box-shadow: 0px 1px 0.625rem 0px rgba(6, 44, 72, 0.39);
}

#app .vdr-item-container {
  border-color: transparent;
}

// 固定表头和固定列时，滚动条宽高 0.375rem 时表头和行有错位问题，需要改成滚动条宽高 0.625rem
#app .ant-table *::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}

.popup-view {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10001;
  background: rgba(0, 0, 0, 0.1);
  iframe {
    width: 80%;
    height: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
button.ant-modal-close {
  z-index: 1000;
  .ant-modal-close-x {
    width: 2.75rem;
    height: 2.75rem;
    line-height: 2.75rem;
  }
}
.page-card-modal {
  overflow: auto;
  background: #fff;
  padding: 0;
  // position: relative;
  &.fullscreen-modal {
    .ant-modal {
      max-width: 100% !important;
    }
  }
  &.yn-modal-close-optiz {
    .ant-modal-close {
      right: 0 !important;
      top: 0 !important;
    }
  }
  .ant-modal-content {
    width: 100%;
    height: 100%;
    overflow: auto;

    .ant-modal-header {
      height: 2.75rem;
      padding: 0.6875rem 1rem;
    }
    .ant-modal-body {
      width: 100%;
      height: 100%;
      padding: 0;
    }
    .ant-modal-footer {
      height: 2.75rem;
      padding: 0.375rem 1rem;
    }
  }
  &.has-title .ant-modal-content .ant-modal-body {
    height: calc(100% - 2.75rem);
  }
  // 查询框打开的列表选择
  &.select-modal {
    .ant-modal-body {
      height: calc(100% - 5.5rem);
      padding: 0;
      .yn-designer-container {
        overflow-x: hidden;
      }
      .page-designer-header-hidden {
        visibility: initial;
      }
    }
  }
  // 查询框打开的详情
  &.select-mode-detial {
    .ant-modal-body {
      height: calc(100% - 2.75rem);
      padding: 0;
    }
    .page-designer-footer {
      padding: 0;
    }
  }
  .yn-dnd-container.has-scroll {
    .yn-designer-container {
      padding-right: 0.875rem;
    }
  }
  .fullscreen-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.75rem;
    height: 2.625rem;
    line-height: 2.625rem;
    color: #444444;
    position: absolute;
    top: 0;
    right: 1.875rem;
    cursor: pointer;
    span svg {
      color: #666666;
      font-size: 1rem;
    }
  }
}
.designer-rt {
  height: auto !important;
}
body .ant-table-thead > tr > th {
  font-weight: 700;
}
</style>
