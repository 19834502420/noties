<template>
  <myDesignerTemplate :baseUrl="baseUrl"></myDesignerTemplate>
</template>

<script>
import myDesignerTemplate from "yn-p1-designer/libs/views/applications/p1_designer/views/myDesignerTemplate/index.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  components: {
    myDesignerTemplate
  },
  data() {
    return {
      baseUrl: BACKEND.BASE_URL
    };
  }
};
</script>

<style></style>
