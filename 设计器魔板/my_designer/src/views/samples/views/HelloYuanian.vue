<template>
  <div class="hello">
    <h1 style="margin-top:20px">{{ msg }}</h1>
    <p>
      关于元年脚手架的相关使用文档，<br />
      请参考
      <a
        href="https://www.tapd.cn/65863259/markdown_wikis/view/#1165863259001002483"
        target="_blank"
        rel="noopener"
        >yn-cli documentation</a
      >.
    </p>
    <h3>元年组件使用指导文档</h3>
    <ul>
      <li>
        <a
          href="http://192.168.12.28:7000/#/cookbook"
          target="_blank"
          rel="noopener"
          >Cookbook</a
        >
      </li>
    </ul>
    <h3>元年组件示例</h3>
    <ul>
      <li>
        <a
          href="http://localhost:7000/#/samples/DashBoard"
          target="_blank"
          rel="noopener"
          >Dash Board</a
        >
      </li>
      <li>
        <a
          href="http://localhost:7000/#/samples/sample1"
          target="_blank"
          rel="noopener"
          >支持插槽设计</a
        >
      </li>
      <li>
        <a
          href="http://localhost:7000/#/samples/sample4"
          target="_blank"
          rel="noopener"
          >表格响应式布局</a
        >
      </li>
      <li>
        <a
          href="http://localhost:7000/#/samples/sample3"
          target="_blank"
          rel="noopener"
          >表单响应式布局</a
        >
      </li>
      <li>
        <a
          href="http://localhost:7000/#/samples/sample2"
          target="_blank"
          rel="noopener"
          >嵌套列表</a
        >
      </li>
    </ul>
    <!-- <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "HelloYuanian",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
