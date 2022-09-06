import classNames from "classnames";
export default {
  name: "IconLingxing",
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
        <svg class="icon svg-icon" id="iconlingxing" viewBox="0 0 1024 1024">
          <path d="M512 0l512 512-512 512-512-512z"></path>
        </svg>
      </i>
    );
  }
};
