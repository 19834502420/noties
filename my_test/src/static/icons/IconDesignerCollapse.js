import classNames from "classnames";
export default {
  name: "IconDesignerCollapse",
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
          id="icondesigner-collapse"
          viewBox="0 0 1592 1024"
        >
          <path d="M796.444444 956.188444L0 0h1592.888889z"></path>
        </svg>
      </i>
    );
  }
};
