import classNames from "classnames";
export default {
  name: "IconFangxing",
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
        <svg class="icon svg-icon" id="iconfangxing" viewBox="0 0 1024 1024">
          <path d="M0 0h1024v1024H0z"></path>
        </svg>
      </i>
    );
  }
};
