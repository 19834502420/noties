<template>
  <PluginList :pluginBaseUrl="pluginBaseUrl" :baseUrl="baseUrl"></PluginList>
</template>
<script>
import PluginList from "yn-p1-designer/libs/views/applications/p1_designer/views/plugins/metadata/PluginList.js";
import { getBackend } from "yn-p1-designer/libs/services/backend.js";

let BACKEND = getBackend();

export default {
  data() {
    return {
      pluginBaseUrl: BACKEND.PLUGIN_BASE_URL,
      baseUrl: BACKEND.BASE_URL
    };
  },
  components: { PluginList }
};
</script>
