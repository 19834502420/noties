import classNames from "classnames";
export default {
  name: "IconDesignerLayout",
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
          id="icondesigner-layout"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M73.142857 292.571429h241.956572v658.285714H73.142857z"
            fill="#D9D9D9"
          ></path>
          <path
            d="M938.715429 0H85.284571C38.253714 0 0 38.326857 0 85.357714v853.284572C0 985.746286 38.253714 1024 85.284571 1024h853.430858c47.030857 0 85.284571-38.326857 85.284571-85.357714V85.357714C1024 38.253714 985.892571 0 938.715429 0z m0 938.642286H85.284571V341.284571H256v596.992h85.357714V341.284571h596.845715V255.853714H85.357714V85.357714h853.357715v853.284572z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
