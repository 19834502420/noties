import classNames from "classnames";
export default {
  name: "IconTu2",
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
        <svg class="icon svg-icon" id="icontu2" viewBox="0 0 1024 1024">
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 0 1 0 64z"
            fill="#000000"
          ></path>
          <path
            d="M182.357333 664.32a37.802667 37.802667 0 0 0 24.832-9.216l212.736-184.405333 206.506667 183.978666c15.36 13.738667 38.912 12.629333 52.906667-2.389333l296.448-260.352a37.888 37.888 0 1 0-55.466667-51.626667L649.216 573.525333 445.44 391.936a37.973333 37.973333 0 0 0-50.005333-0.341333L157.610667 597.76a37.888 37.888 0 0 0 24.746666 66.56z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
