<template>
  <div
    id="app"
    :class="{ 'yn-scrollbar-sm': designerRt, 'designer-rt': designerRt }"
  >
    <yn-spin :spinning="spinning" size="large">
      <yn-locale-provider :locale="getLocale()">
        <MainFrame />
      </yn-locale-provider>
    </yn-spin>
  </div>
</template>

<script>
import CommonApp from "@/entries/common/App.vue";
import AppRouter from "yn-p1/libs/config/navi/router";
import MainFrame from "@/views/platform/ui/MainFrame";
import menuStructure from "@/config/navi/menuStructure.js";
import customMenuStructure from "@/custom/config/navi/menuStructure.js";
import { OPERATION } from "@/config/custom/";
import Logger from "yn-p1/libs/modules/log/logger";
import {
  DashboardKey,
  SysKey
} from "@/views/applications/default/config/commonConst.js";
import DsUtils from "yn-p1/libs/utils/DsUtils";

export default {
  name: "app",
  mixins: [CommonApp],
  data() {
    return {};
  },
  components: {
    MainFrame
  },
  created() {
    AppRouter.loadMenu(this, this.getMergedMenuStructure());
  },
  beforeCreate() {
    this.$router.beforeEach(async (to, from, next) => {
      // let { path: fromPath, query: fromQuery } = from;
      // let { path: toPath, query: toQuery } = to;
      // if (fromPath === toPath && !isObjectValueEqual(fromQuery, toQuery)) {
      //   window.location.reload();
      // }
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
        (to.query.timeDelta && to.query.timeDelta !== headers.timeDelta)
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
        to.query.lang && (headers.lang = to.query.lang);
        to.query.scene && (headers.scene = to.query.scene);
        to.query.serviceName && (headers.ServiceName = to.query.serviceName);
        to.query.securityFlag && (headers.securityFlag = to.query.securityFlag);
        to.query.timeDelta && (headers.timeDelta = to.query.timeDelta);
        DsUtils.setSessionStorageItem(SysKey, headers, {
          storagePrefix: DashboardKey,
          isJson: true
        });
      }
      next();
    });
  },
  methods: {
    getMergedMenuStructure() {
      const mergedMenuStructure = [...menuStructure];
      customMenuStructure.forEach(customMenu => {
        let { operation = OPERATION.INSERT_AFTER, target } =
          customMenu.custom || {};
        let mergedMenuIndex = -1;
        if (target) {
          mergedMenuIndex = mergedMenuStructure.findIndex(
            mergedMenu => mergedMenu.meta.appId === target
          );
        } else {
          mergedMenuIndex = mergedMenuStructure.length - 1;
        }
        switch (operation) {
          case OPERATION.DELETE:
            mergedMenuStructure.splice(mergedMenuIndex, 1);
            break;
          case OPERATION.INSERT_BEFORE:
            mergedMenuStructure.splice(mergedMenuIndex, 0, customMenu);
            break;
          case OPERATION.INSERT_AFTER:
            mergedMenuStructure.splice(mergedMenuIndex + 1, 0, customMenu);
            break;
          case OPERATION.REPLACE:
            mergedMenuStructure.splice(mergedMenuIndex, 1, customMenu);
            break;
          default:
            Logger.error(
              `operation ${operation} in custom menu structure is not supported`
            );
            break;
        }
        delete customMenu.custom;
      });
      return mergedMenuStructure;
    }
  }
};
</script>
<style lang="less">
.designer-rt {
  height: auto !important;
}
#app .ant-spin-blur {
  opacity: 1;
}
#app .ant-spin-blur::after {
  opacity: 0;
}
#app .ant-spin {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
// 固定表头和固定列时，滚动条宽高 0.375rem 时表头和行有错位问题，需要改成滚动条宽高 0.625rem
#app .ant-table *::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}
@media (max-width: 767px) {
  .ant-modal {
    min-width: calc(100vw - 16px) !important;
  }
}
</style>
