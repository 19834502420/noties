import classNames from "classnames";
export default {
  name: "IconToolbarAnalyze",
  functional: true,
  render(createElement, context) {
    let { data, listeners } = context;
    const classString = classNames(["anticon", data.staticClass, data.class]);
    const style = { ...(data.staticStyle || {}), ...(data.style || {}) };
    const iProps = {
      class: classString,
      style,
      on: listeners
    };
    return (
      <i {...iProps}>
        <svg
          class="icon svg-icon"
          id="icontoolbar-analyze"
          viewBox="0 0 1126 1024"
        >
          <path d="M600.8832 910.1824v37.4784h241.664a38.1952 38.1952 0 0 1 0 76.3392H283.3408a38.1952 38.1952 0 1 1 0-76.3392h237.056v-37.4784l-465.408-0.768c-30.1056 0-54.4768-22.0672-54.4768-49.3568L0 151.7568C0 124.5184 24.3712 102.4 54.4768 102.4h199.3728a270.0288 270.0288 0 0 0-37.1712 81.2032H89.2928l0.512 643.6864h947.3024l-0.512-643.6864h-216.2688A269.9776 269.9776 0 0 0 783.104 102.4h288.256c30.1056 0 54.528 22.1184 54.528 49.3568L1126.4 860.0576c0 27.2896-24.4224 49.3568-54.4768 49.3568l-471.04 0.768z m258.048-316.672c-20.4288 19.968-53.5552 19.968-73.9328 0l-153.4464-149.8112a243.4048 243.4048 0 0 1-111.104 26.7776c-132.8128 0-240.4352-105.3184-240.4352-235.2128C280.064 105.3184 387.6864 0 520.448 0c132.7616 0 240.384 105.3184 240.384 235.264 0 53.504-18.432 102.656-49.2544 142.1824l147.3536 143.872a50.176 50.176 0 0 1 0 72.192zM367.3088 235.264c0 82.6368 68.5056 149.6576 152.9856 149.6576S673.28 317.952 673.28 235.264c0-82.688-68.5056-149.7088-152.9856-149.7088S367.3088 152.576 367.3088 235.264z"></path>
        </svg>
      </i>
    );
  }
};
