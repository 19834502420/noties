<template>
  <myPageDesigner :baseUrl="baseUrl"></myPageDesigner>
</template>

<script>
import myPageDesigner from "yn-p1-designer/libs/views/applications/p1_designer/views/myPageDesigner/index.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  components: {
    myPageDesigner
  },
  data() {
    return {
      baseUrl: BACKEND.BASE_URL
    };
  }
};
</script>

<style></style>
