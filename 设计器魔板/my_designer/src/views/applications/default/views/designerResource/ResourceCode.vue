<template>
  <ResourceCode :resourceBaseUrl="resourceBaseUrl"></ResourceCode>
</template>
<script>
import ResourceCode from "yn-p1-designer/libs/views/applications/p1_designer/views/designerResource/code/index.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  data() {
    return {
      resourceBaseUrl: BACKEND.RESOURCE_BASE_URL
    };
  },
  components: { ResourceCode }
};
</script>
