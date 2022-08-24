import classNames from "classnames";
export default {
  name: "IconDesignerTextarea",
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
          id="icondesigner-textarea"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333zM815.957333 733.610667a42.666667 42.666667 0 1 1 0 85.333333H232.618667a42.666667 42.666667 0 0 1 0-85.333333h583.338666z m-327.68-516.096a42.666667 42.666667 0 0 1 0 85.333333H390.656v223.744a42.666667 42.666667 0 1 1-85.333333 0V302.933333h-97.28a42.666667 42.666667 0 1 1 0-85.333333H488.106667z m327.68 262.4a42.666667 42.666667 0 1 1 0 85.333333H486.826667a42.666667 42.666667 0 1 1 0-85.333333h329.130666z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
