<template>
  <PluginCode :pluginBaseUrl="pluginBaseUrl"></PluginCode>
</template>
<script>
import PluginCode from "yn-p1-designer/libs/views/applications/p1_designer/views/plugins/code/index.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  data() {
    return {
      pluginBaseUrl: BACKEND.PLUGIN_BASE_URL
    };
  },
  components: { PluginCode }
};
</script>
