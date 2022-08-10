import classNames from "classnames";
export default {
  name: "IconDesignerGridContainer",
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
          id="icondesigner-grid-container"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M85.333333 85.333333h170.666667v853.333334H85.333333zM512 85.333333h256v853.333334H512z"
            fill="#DBDBDB"
          ></path>
          <path
            d="M304.725333 59.050667V1024h-85.333333V59.050667zM554.666667 42.666667v964.949333h-85.333334V42.666667zM804.608 59.050667V1024h-85.333333V59.050667z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M1024 0v1024H0V0h1024z m-85.333333 85.333333H85.333333v853.333334h853.333334V85.333333z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
