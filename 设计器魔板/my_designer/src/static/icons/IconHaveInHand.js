import classNames from "classnames";
export default {
  name: "IconHaveInHand",
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
          id="iconhave-in-hand"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m0.170667 170.666666a42.666667 42.666667 0 0 0-42.666667 42.666667v256.170667l0.341333 5.632a42.666667 42.666667 0 0 0 12.117334 24.576l180.906666 180.906666 4.010667 3.498667a42.666667 42.666667 0 0 0 56.32-3.541333l3.584-4.010667a42.666667 42.666667 0 0 0-3.584-56.32l-168.405333-168.405333 0.042666-238.506667-0.298666-4.992A42.666667 42.666667 0 0 0 512.170667 213.333333z"></path>
        </svg>
      </i>
    );
  }
};
