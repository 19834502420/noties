import classNames from "classnames";
export default {
  name: "IconDesignerInput",
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
          id="icondesigner-input"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333zM690.944 741.034667a42.666667 42.666667 0 1 1 0 85.333333H333.056a42.666667 42.666667 0 1 1 0-85.333333h357.888zM725.333333 209.578667a42.666667 42.666667 0 1 1 0 85.333333h-170.666666V642.56a42.666667 42.666667 0 1 1-85.333334 0V294.912h-170.666666a42.666667 42.666667 0 0 1 0-85.333333h426.666666z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
