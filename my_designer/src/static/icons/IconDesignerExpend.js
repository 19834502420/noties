import classNames from "classnames";
export default {
  name: "IconDesignerExpend",
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
          id="icondesigner-expend"
          viewBox="0 0 1024 1024"
        >
          <path d="M833.828571 512L219.428571 1024V0z"></path>
        </svg>
      </i>
    );
  }
};
