import classNames from "classnames";
export default {
  name: "IconDesignerSplitLine",
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
          id="icondesigner-split-line"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M42.666667 856.917333h938.666666a42.666667 42.666667 0 1 1 0 85.333334H42.666667a42.666667 42.666667 0 0 1 0-85.333334zM42.666667 81.749333h938.666666a42.666667 42.666667 0 1 1 0 85.333334H42.666667a42.666667 42.666667 0 0 1 0-85.333334z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M87.04 544.853333h85.333333a42.666667 42.666667 0 1 0 0-85.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333333z m256 0h85.333333a42.666667 42.666667 0 1 0 0-85.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333333z m256 0h85.333333a42.666667 42.666667 0 1 0 0-85.333333h-85.333333a42.666667 42.666667 0 0 0 0 85.333333z m256 0h85.333333a42.666667 42.666667 0 1 0 0-85.333333h-85.333333a42.666667 42.666667 0 1 0 0 85.333333z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
