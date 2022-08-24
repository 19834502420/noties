<template>
  <DashboardRt
    :baseUrl="baseUrl"
    :pluginBaseUrl="pluginBaseUrl"
    :dashboardAttachment="dashboardAttachment"
    :customComponentsBaseUrl="customComponentsBaseUrl"
    :dashboardCustomComponentsConfig="dashboardCustomComponentsConfig"
  ></DashboardRt>
</template>
<script>
import DashboardRt from "yn-p1-designer/libs/views/applications/p1_designer/views/dashboard/rt/index.js";
import { BACKEND } from "@/config/SETUP.js";
import dashboardCustomComponentsConfig from "@/custom/config/dashboard/customComponents.js";

export default {
  data() {
    return {
      baseUrl: BACKEND.BASE_URL,
      pluginBaseUrl: BACKEND.PLUGIN_BASE_URL,
      dashboardAttachment: BACKEND.DASHBOARD_ATTACHMENT,
      customComponentsBaseUrl: BACKEND.CUSTOM_COMPONENTS_BASE_URL,
      dashboardCustomComponentsConfig: dashboardCustomComponentsConfig
    };
  },
  components: { DashboardRt }
};
</script>
