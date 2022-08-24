import classNames from "classnames";
export default {
  name: "IconDesignerSwitch",
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
          id="icondesigner-switch"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M682.666667 170.666667a341.333333 341.333333 0 1 1 0 682.666666H341.333333a341.333333 341.333333 0 1 1 0-682.666666h341.333334z m0 85.333333H341.333333a256 256 0 0 0-15.018666 511.573333L341.333333 768h341.333334a256 256 0 0 0 15.018666-511.573333L682.666667 256z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M682.666667 512m-170.666667 0a170.666667 170.666667 0 1 0 341.333333 0 170.666667 170.666667 0 1 0-341.333333 0Z"
            fill="#4A4A4B"
          ></path>
          <path
            d="M682.666667 512m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z"
            fill="#D5D5D5"
          ></path>
        </svg>
      </i>
    );
  }
};
