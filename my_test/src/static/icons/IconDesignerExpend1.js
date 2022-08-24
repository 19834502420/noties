import classNames from "classnames";
export default {
  name: "IconDesignerExpend1",
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
          id="icondesigner-expend1"
          viewBox="0 0 1024 1024"
        >
          <path d="M819.2 512L204.8 1024V0z" fill="#999999"></path>
        </svg>
      </i>
    );
  }
};
