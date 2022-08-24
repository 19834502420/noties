import classNames from "classnames";
export default {
  name: "IconHDesignePreview",
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
          id="iconh-designe-preview"
          viewBox="0 0 1170 1024"
        >
          <path d="M585.142857 277.942857A231.131429 231.131429 0 0 0 351.085714 512 231.131429 231.131429 0 0 0 585.142857 746.057143 231.131429 231.131429 0 0 0 819.2 512 231.131429 231.131429 0 0 0 585.142857 277.942857z m0 351.085714A117.028571 117.028571 0 1 1 702.171429 512 115.565714 115.565714 0 0 1 585.142857 629.028571z"></path>
          <path d="M1170.285714 497.371429c0-7.314286-131.657143-453.485714-585.142857-453.485715S0 490.057143 0 497.371429v29.257142c0 7.314286 131.657143 453.485714 585.142857 453.485715 431.542857 0 570.514286-416.914286 585.142857-446.171429v-36.571428z m-585.142857 365.714285C263.314286 863.085714 146.285714 585.142857 117.028571 512A498.834286 498.834286 0 0 1 585.142857 160.914286c321.828571 0 438.857143 277.942857 468.114286 351.085714-29.257143 73.142857-146.285714 351.085714-468.114286 351.085714z"></path>
        </svg>
      </i>
    );
  }
};
