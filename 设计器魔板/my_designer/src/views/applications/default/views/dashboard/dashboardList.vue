<template>
  <div>
    <MyDashboard :baseUrl="backend.BASE_URL"></MyDashboard>
  </div>
</template>
<script lang="ts">
import MyDashboard from "yn-p1-designer/libs/views/applications/p1_designer/views/myDashboard/index.js";
import { BACKEND } from "@/config/SETUP.js";

export default {
  name: "app",
  components: {
    MyDashboard
  },
  data() {
    return {
      backend: BACKEND
    };
  }
};
</script>
<style lang="less" scoped></style>
