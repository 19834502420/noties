import { defineComponent, VUE } from "yn-p1/libs/utils/ComponentUtils";
import template from "./yn-handsontable.html";
import definition from "./yn-handsontable.js";
import metadata from "./mixinsMetadata";
import "./yn-handsontable.less";
import { getMetadataByLang } from "yn-p1-designer/libs/views/applications/utils/componentUtils.js";

export default defineComponent({
  name: "yn-handsontable",
  type: VUE,
  template,
  definition,
  metadata: getMetadataByLang(metadata)
});
