<template>
  <CustomComponentsList
    :dashboardAttachment="dashboardAttachment"
    :customComponentsBaseUrl="customComponentsBaseUrl"
    :baseUrl="baseUrl"
  ></CustomComponentsList>
</template>
<script>
import CustomComponentsList from "yn-p1-designer/libs/views/applications/p1_designer/views/customComponents/customComponentsList.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  data() {
    return {
      dashboardAttachment: BACKEND.DASHBOARD_ATTACHMENT,
      customComponentsBaseUrl: BACKEND.CUSTOM_COMPONENTS_BASE_URL,
      baseUrl: BACKEND.BASE_URL
    };
  },
  components: { CustomComponentsList }
};
</script>
