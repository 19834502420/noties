<template>
  <ResourceList
    :resourceBaseUrl="resourceBaseUrl"
    :baseUrl="baseUrl"
  ></ResourceList>
</template>
<script>
import ResourceList from "yn-p1-designer/libs/views/applications/p1_designer/views/designerResource/metadata/ResourceList.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  data() {
    return {
      resourceBaseUrl: BACKEND.RESOURCE_BASE_URL,
      baseUrl: BACKEND.BASE_URL
    };
  },
  components: { ResourceList }
};
</script>
