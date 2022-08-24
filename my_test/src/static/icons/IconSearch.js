import classNames from "classnames";
export default {
  name: "IconSearch",
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
        <svg class="icon svg-icon" id="iconsearch" viewBox="0 0 1024 1024">
          <path d="M472.448 67.114667a405.333333 405.333333 0 0 1 405.333333 405.333333 403.626667 403.626667 0 0 1-90.112 254.848l156.714667 156.757333a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-156.757333-156.714667a403.626667 403.626667 0 0 1-254.848 90.112 405.333333 405.333333 0 0 1 0-810.666666z m0 85.333333a320 320 0 1 0 0 640 320 320 0 0 0 0-640z"></path>
        </svg>
      </i>
    );
  }
};
