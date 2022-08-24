import classNames from "classnames";
export default {
  name: "IconWenben1",
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
        <svg class="icon svg-icon" id="iconwenben1" viewBox="0 0 1024 1024">
          <path
            d="M1024 877.714286a146.285714 146.285714 0 0 1-146.285714 146.285714H146.285714a146.285714 146.285714 0 0 1-146.285714-146.285714V146.285714a146.285714 146.285714 0 0 1 146.285714-146.285714h585.142857l292.571429 292.571429v585.142857z"
            fill="#2968F0"
          ></path>
          <path
            d="M804.571429 422.619429H570.514286V804.571429H453.485714V422.619429H219.428571V292.571429h585.142858z"
            fill="#FFFFFF"
            fill-opacity=".7"
          ></path>
        </svg>
      </i>
    );
  }
};
