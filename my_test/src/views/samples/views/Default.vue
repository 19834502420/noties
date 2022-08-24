<template>
  <div id="default">
    <img
      alt="Vue logo"
      src="../../../../node_modules/yn-p1/libs/assets/platform/images/yuanian.png"
    />
    <HelloYuanian msg="欢迎使用元年P1前端开发平台" />
  </div>
</template>

<script>
import HelloYuanian from "./HelloYuanian.vue";

export default {
  name: "app",
  components: {
    HelloYuanian
  }
};
</script>

<style>
#default {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
