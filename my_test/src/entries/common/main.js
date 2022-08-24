import Vue from "vue";
import "normalize.css/normalize.css";
import { LOG, APPS } from "../../config/SETUP";
import Logger from "yn-p1/libs/modules/log/logger";
import store from "../../store/";
import VueRouter from "vue-router";
import YnP1 from "yn-p1";
import "@/themes/theme.less";
import {
  initBackend,
  getBackend
} from "yn-p1-designer/libs/services/backend.js";
import { getEntryConfig } from "./entryConfig.js";

import DsUtils from "yn-p1/libs/utils/DsUtils";
import UrlUtils from "yn-p1/libs/utils/UrlUtils";

import {
  DashboardKey,
  SysKey
} from "@/views/applications/default/config/commonConst.js";

// 开启组件库响应式
// YnP1.responsive.init();

const { app, routes } = getEntryConfig();
// 默认语种
const LOCALE_CODE = "zh_CN";

let { i18n } = YnP1.instances;
let serverFromQuery = UrlUtils.getQuery("server");
let ignoreFromQuery = UrlUtils.getQuery("ignore");
DsUtils.setSessionStorageItem("debug_server", serverFromQuery || "");
DsUtils.setSessionStorageItem("debug_ignore", (ignoreFromQuery || false) + "");
if (serverFromQuery) {
  serverFromQuery = "http://" + serverFromQuery;
  if (serverFromQuery.substring(serverFromQuery.length - 1) !== "/") {
    serverFromQuery += "/";
  }
}
const baseUrlFromQuery = serverFromQuery || UrlUtils.getQuery("baseUrl");

const baseUrl = baseUrlFromQuery
  ? // @ts-ignore
    decodeURIComponent(decodeURIComponent(baseUrlFromQuery))
  : process.env.VUE_APP_BASE_URL;

const BACKEND = {
  BASE_URL: baseUrl,
  BASE_URL_INIT: process.env.VUE_APP_BASE_URL_INIT || baseUrl,
  MOCK_BASE_URL: process.env.VUE_APP_MOCK_BASE_URL,
  MDD_BASE_URL: process.env.VUE_APP_MDD_BASE_URL,
  MR_BASE_URL: process.env.VUE_APP_MR_BASE_URL,
  DASHBOARD_BASE_URL: process.env.VUE_APP_DASHBOARD_BASE_URL,
  DASHBOARD_ATTACHMENT: process.env.VUE_APP_DASHBOARD_ATTACHMENT || baseUrl, //图片上传接口
  PLUGIN_BASE_URL: process.env.VUE_APP_PLUGIN_BASE_URL || baseUrl,
  CUSTOM_COMPONENTS_BASE_URL:
    process.env.VUE_APP_CUSTOM_COMPONENTS_BASE_URL || baseUrl,
  RESOURCE_BASE_URL: process.env.VUE_APP_RESOURCE_BASE_URL || baseUrl,
  CONSOLE_BASE_URL: process.env.VUE_APP_CONSOLE_BASE_URL || baseUrl
};

initBackend(BACKEND);

const urlLogLevel = UrlUtils.getQuery("logLevel");
// url上的自定参数的优先级最高
const logLevel = urlLogLevel ? Number(urlLogLevel) : LOG.LEVEL;
Logger.option("level", logLevel);
Logger.warn(
  `Platform Log Level: ${
    logLevel === 2
      ? "2 - Warn"
      : logLevel === 3
      ? "3 - Info"
      : logLevel === 4
      ? "4 - Log"
      : ""
  }`
);

Vue.config.productionTip = false;

Vue.use(VueRouter);

YnP1.setup(LOG, APPS, BACKEND);

let router = new VueRouter({ routes: [] });

if (routes) {
  router = new VueRouter({ routes });
  let BACKEND = getBackend();
  const inTab = UrlUtils.getQuery("inTab");
  const tabKey = UrlUtils.getQuery("tabKey");
  DsUtils.init(BACKEND.BASE_URL_INIT, `${(inTab || tabKey) + APPS.NAME}`);
  router.beforeEach(async (to, from, next) => {
    let headers = DsUtils.getSessionStorageItem(SysKey, {
      storagePrefix: DashboardKey,
      isJson: true
    });
    !headers && (headers = {});
    if (
      (to.query.token && headers.token !== to.query.token) ||
      (to.query.TOKEN && to.query.TOKEN !== headers.token) ||
      (to.query.appId && headers.appId !== to.query.appId) ||
      (to.query.scene && to.query.scene !== headers.scene) ||
      (to.query.loginName && to.query.loginName !== headers.userLoginName) ||
      (to.query.securityFlag &&
        to.query.securityFlag !== headers.securityFlag) ||
      (to.query.timeDelta && to.query.timeDelta !== headers.timeDelta) ||
      (to.query.origin && to.query.origin !== headers.origin) ||
      (to.query.logoutTargetUrl &&
        to.query.logoutTargetUrl !== headers.logoutTargetUrl) ||
      (to.query.lang && to.query.lang !== headers.lang) ||
      (to.query.serviceName && to.query.serviceName !== headers.ServiceName) ||
      (to.query.tabKey && to.query.tabKey !== headers.tabKey) ||
      (to.query.inTab && to.query.inTab !== headers.inTab)
    ) {
      headers.token = to.query.token || to.query.TOKEN;
      to.query.loginName && (headers.userLoginName = to.query.loginName);
      to.query.projectCode && (headers.projectCode = to.query.projectCode);
      // to.query.appId && (headers.appId = to.query.appId);
      to.query.appId &&
        (headers.appId =
          typeof to.query.appId === "string"
            ? to.query.appId
            : to.query.appId[0]); // 临时解决控制台 参数传两个appId问题
      headers.lang = to.query.lang || LOCALE_CODE;
      to.query.scene && (headers.scene = to.query.scene);
      to.query.serviceName && (headers.ServiceName = to.query.serviceName);
      to.query.securityFlag && (headers.securityFlag = to.query.securityFlag);
      to.query.timeDelta && (headers.timeDelta = to.query.timeDelta);
      to.query.origin && (headers.origin = to.query.origin);
      to.query.logoutTargetUrl &&
        (headers.logoutTargetUrl = to.query.logoutTargetUrl);
      to.query.tabKey && (headers.tabKey = to.query.tabKey);
      to.query.inTab && (headers.inTab = to.query.inTab);
      DsUtils.setSessionStorageItem(SysKey, headers, {
        storagePrefix: DashboardKey,
        isJson: true
      });
    }
    const bodyDom = document.querySelector("body");
    if (to.path === "/pageDesigner_rt") {
      bodyDom.classList.add("page-designer-overflow-lock");
    } else {
      bodyDom.classList.remove("page-designer-overflow-lock");
    }
    next();
  });
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(app)
}).$mount("#app");
