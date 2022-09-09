import basicOptions from "yn-p1-designer/libs/views/applications/p1_designer/components/yn-designer-component/index.js";
delete basicOptions.create;
import "yn-handsontable/dist/handsontable.full.css";
import "yn-p1/libs/components/yn-button/";
export default {
  methods: {
    // 自定义下载文件方法
    downExcel(obj, fileName) {
      const a_node = document.createElement("a");
      a_node.download = fileName;
      if ("msSaveOrOpenBlob" in navigator) {
        window.navigator.msSaveOrOpenBlob(obj, fileName);
      } else {
        a_node.href = URL.createObjectURL(obj);
      }
      a_node.click();
      //
      // setTimeout(() =&gt; {
      //   URL.revokeObjectURL(obj);
      // }, 2000);
    },
    // 文件流转换
    s2ab(s) {
      if (typeof ArrayBuffer !== "undefined") {
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf);
        for (let i = 0; i != s.length; ++i) {
          view[i] = s.charCodeAt(i) & 0xff;
        }
        return buf;
      } else {
        const buf = new Array(s.length);
        for (let i = 0; i != s.length; ++i) {
          buf[i] = s.charCodeAt(i) & 0xff;
        }
        return buf;
      }
    }
  }
};
