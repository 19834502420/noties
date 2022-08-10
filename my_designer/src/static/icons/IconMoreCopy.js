import classNames from "classnames";
export default {
  name: "IconMoreCopy",
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
        <svg class="icon svg-icon" id="iconmore-copy" viewBox="0 0 3584 1024">
          <path d="M1437.33333313 512.00000018a360 360 0 1 1 720 0 360 360 0 0 1-720 0z m0-1319.99999999a360 360 0 1 1 720 0 360 360 0 0 1-720 0z m-1e-8 2640a360 360 0 1 1 720.00000002 0 360 360 0 0 1-720.00000002 0z"></path>
        </svg>
      </i>
    );
  }
};
