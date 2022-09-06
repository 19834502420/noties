import classNames from "classnames";
export default {
  name: "IconXixian",
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
        <svg class="icon svg-icon" id="iconxixian" viewBox="0 0 20480 1024">
          <path d="M0 0h20480v1024H0z"></path>
        </svg>
      </i>
    );
  }
};
