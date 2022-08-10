import classNames from "classnames";
export default {
  name: "IconDesignerAdaptiveContainer",
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
          id="icondesigner-adaptive-container"
          viewBox="0 0 1024 1024"
        >
          <path d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333z"></path>
          <path d="M640 341.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v426.666667a42.666667 42.666667 0 0 1-42.666667 42.666666h-426.666667a42.666667 42.666667 0 0 1-42.666666-42.666666v-426.666667a42.666667 42.666667 0 0 1 42.666666-42.666667h426.666667zM597.333333 426.666667H256v341.333333h341.333333V426.666667z"></path>
          <path d="M810.666667 170.666667a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z"></path>
        </svg>
      </i>
    );
  }
};
