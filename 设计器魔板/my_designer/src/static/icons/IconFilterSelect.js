import classNames from "classnames";
export default {
  name: "IconFilterSelect",
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
          id="iconfilter-select"
          viewBox="0 0 1024 1024"
        >
          <path d="M886.357333 85.333333H137.642667a45.141333 45.141333 0 0 0-28.672 80l68.992 56.746667c137.557333 113.066667 214.058667 264.661333 214.058666 423.68 0 63.786667-12.16 126.421333-36.138666 186.410667l-17.834667 44.629333A45.141333 45.141333 0 0 0 379.946667 938.666667h254.72c24.917333 0 45.141333-20.181333 45.141333-45.141334-0.554667-8.533333-0.554667-8.533333-3.242667-16.725333l-17.834666-44.629333a499.797333 499.797333 0 0 1-36.138667-186.410667c0-159.018667 76.501333-310.613333 214.058667-423.68l76.16-55.04A45.141333 45.141333 0 0 0 886.357333 85.333333z"></path>
        </svg>
      </i>
    );
  }
};
