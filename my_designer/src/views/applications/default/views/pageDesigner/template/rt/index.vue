<template>
  <pageDesignerTemplate
    :baseUrl="backend.BASE_URL"
    :dashboardAttachment="backend.DASHBOARD_ATTACHMENT"
    :customComponentsBaseUrl="backend.CUSTOM_COMPONENTS_BASE_URL"
    :customComponentsConfig="customComponentsConfig"
  ></pageDesignerTemplate>
</template>

<script>
import pageDesignerTemplate from "yn-p1-designer/libs/views/applications/p1_designer/views/designerTemplate/rt/index.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();
import customComponentsConfig from "@/custom/config/pageDesigner/customComponents.js";

export default {
  components: {
    pageDesignerTemplate
  },
  data() {
    return {
      backend: BACKEND,
      customComponentsConfig
    };
  }
};
</script>

<style></style>
