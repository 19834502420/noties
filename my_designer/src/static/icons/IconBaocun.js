import classNames from "classnames";
export default {
  name: "IconBaocun",
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
        <svg class="icon svg-icon" id="iconbaocun" viewBox="0 0 1024 1024">
          <path d="M696.917333 0h-600.746666C42.922667 0 0 43.008 0 96.085333v831.829334C0 980.992 43.008 1024 96.085333 1024h831.829334c53.077333 0 96.085333-43.008 96.085333-96.085333V326.997333L696.917333 0zM268.202667 96.085333h289.706666v274.944a48.042667 48.042667 0 0 1-48.042666 48.042667H316.245333a48.042667 48.042667 0 0 1-48.042666-48.042667V96.085333z m659.626666 831.829334H96.170667V96.085333h75.946666v274.944c0 79.530667 64.682667 144.213333 144.213334 144.213334h193.621333a144.213333 144.213333 0 0 0 144.213333-144.213334V96.085333H657.066667l270.592 270.677334v561.152h0.170666z m-472.746666-605.013334a48.042667 48.042667 0 0 0 48.128-48.042666V217.6a48.042667 48.042667 0 1 0-96.170667 0v57.344c0 26.624 21.504 48.128 48.128 48.128z"></path>
        </svg>
      </i>
    );
  }
};
