<template>
  <Dashboard
    :baseUrl="baseUrl"
    :dashboardAttachment="dashboardAttachment"
    :customComponentsBaseUrl="customComponentsBaseUrl"
    :dashboardCustomComponentsConfig="dashboardCustomComponentsConfig"
    :mddBaseUrl="mddBaseUrl"
  ></Dashboard>
</template>
<script>
import Dashboard from "yn-p1-designer/libs/views/applications/p1_designer/views/dashboard/index.js";
import { BACKEND } from "@/config/SETUP.js";
import dashboardCustomComponentsConfig from "@/custom/config/dashboard/customComponents.js";

export default {
  name: "c1_dashboard",
  data() {
    return {
      baseUrl: BACKEND.BASE_URL,
      dashboardAttachment: BACKEND.DASHBOARD_ATTACHMENT,
      customComponentsBaseUrl: BACKEND.CUSTOM_COMPONENTS_BASE_URL,
      mddBaseUrl: BACKEND.MDD_BASE_URL,
      dashboardCustomComponentsConfig
    };
  },
  components: { Dashboard }
};
</script>
