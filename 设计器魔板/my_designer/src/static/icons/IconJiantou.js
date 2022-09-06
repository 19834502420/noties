import classNames from "classnames";
export default {
  name: "IconJiantou",
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
        <svg class="icon svg-icon" id="iconjiantou" viewBox="0 0 1024 1024">
          <path d="M0 896l512-768 512 768-512-178z" fill="#333333"></path>
        </svg>
      </i>
    );
  }
};
