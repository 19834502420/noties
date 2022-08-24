import classNames from "classnames";
export default {
  name: "IconAddCircle",
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
        <svg class="icon svg-icon" id="iconadd-circle" viewBox="0 0 1024 1024">
          <path d="M512 42.666667C252.8 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667z m0 85.333333a384 384 0 1 1 0 768 384 384 0 0 1 0-768z"></path>
          <path d="M512 298.666667a42.666667 42.666667 0 0 1 42.368 37.674666L554.666667 341.333333v341.333334a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 682.666667V341.333333a42.666667 42.666667 0 0 1 42.666667-42.666666z"></path>
          <path d="M682.666667 469.333333a42.666667 42.666667 0 0 1 4.992 85.034667L682.666667 554.666667H341.333333a42.666667 42.666667 0 0 1-4.992-85.034667L341.333333 469.333333h341.333334z"></path>
        </svg>
      </i>
    );
  }
};
