import classNames from "classnames";
export default {
  name: "IconDesignerSplitContainer",
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
          id="icondesigner-split-container"
          viewBox="0 0 1024 1024"
        >
          <path d="M469.333333 0h85.333334v1024h-85.333334z"></path>
          <path d="M298.666667 85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334h213.333334z m0 85.333334H85.333333v682.666666h213.333334V170.666667zM938.666667 85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334H938.666667z m0 85.333334H725.333333v682.666666H938.666667V170.666667z"></path>
          <path d="M469.333333 0h85.333334a42.666667 42.666667 0 0 1 0 85.333333h-85.333334a42.666667 42.666667 0 0 1 0-85.333333zM469.333333 938.666667h85.333334a42.666667 42.666667 0 1 1 0 85.333333h-85.333334a42.666667 42.666667 0 1 1 0-85.333333z"></path>
        </svg>
      </i>
    );
  }
};
