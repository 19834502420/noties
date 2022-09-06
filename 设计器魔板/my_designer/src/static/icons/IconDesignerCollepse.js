import classNames from "classnames";
export default {
  name: "IconDesignerCollepse",
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
          id="icondesigner-collepse"
          viewBox="0 0 1365 1024"
        >
          <path
            d="M682.666667 921.6L0 102.4h1365.333333z"
            fill="#999999"
          ></path>
        </svg>
      </i>
    );
  }
};
