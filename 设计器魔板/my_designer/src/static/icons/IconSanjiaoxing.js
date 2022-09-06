import classNames from "classnames";
export default {
  name: "IconSanjiaoxing",
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
        <svg class="icon svg-icon" id="iconsanjiaoxing" viewBox="0 0 1365 1024">
          <path d="M682.666667 0l682.666666 1024H0z"></path>
        </svg>
      </i>
    );
  }
};
