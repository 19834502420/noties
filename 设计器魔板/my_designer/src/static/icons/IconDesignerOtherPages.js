import classNames from "classnames";
export default {
  name: "IconDesignerOtherPages",
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
          id="icondesigner-other-pages"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M616.277333 121.685333h276.650667v275.285334H616.277333z"
            fill="#D8D8D8"
          ></path>
          <path
            d="M483.584 540.416v341.333333a85.333333 85.333333 0 0 1-85.333333 85.333334h-256a85.333333 85.333333 0 0 1-85.333334-85.333334v-256a85.333333 85.333333 0 0 1 85.333334-85.333333h341.333333z m398.165333 0a85.333333 85.333333 0 0 1 85.333334 85.333333v256a85.333333 85.333333 0 0 1-85.333334 85.333334h-256a85.333333 85.333333 0 0 1-85.333333-85.333334v-341.333333h341.333333z m-483.498666 85.333333h-256v256h256v-256z m483.498666 0h-256v256h256v-256zM398.250667 56.917333a85.333333 85.333333 0 0 1 85.333333 85.333334v341.333333h-341.333333a85.333333 85.333333 0 0 1-85.333334-85.333333v-256a85.333333 85.333333 0 0 1 85.333334-85.333334h256z m355.498666 0a213.333333 213.333333 0 1 1 0 426.666667 213.333333 213.333333 0 0 1 0-426.666667z m-355.498666 85.333334h-256v256h256v-256z m355.498666 0a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
