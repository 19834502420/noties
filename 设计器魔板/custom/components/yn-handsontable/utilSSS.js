import basicOptions from "yn-p1-designer/libs/views/applications/p1_designer/components/yn-designer-component/index.js";
delete basicOptions.create;
import "yn-handsontable/dist/handsontable.full.css";
import "yn-p1/libs/components/yn-button/";
export default {
  methods: {
    fan1() {
      alert("aa");
    },
    fan2(a) {
      alert(a);
    },
    fan3() {
      alert("cc");
    }
  }
};
