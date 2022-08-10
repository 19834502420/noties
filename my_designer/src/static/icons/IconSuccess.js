import classNames from "classnames";
export default {
  name: "IconSuccess",
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
        <svg class="icon svg-icon" id="iconsuccess" viewBox="0 0 1024 1024">
          <path d="M512 42.666667C253.866667 42.666667 42.666667 253.866667 42.666667 512s211.2 469.333333 469.333333 469.333333 469.333333-211.2 469.333333-469.333333S770.133333 42.666667 512 42.666667z m273.792 383.274666l-281.6 289.450667c-7.850667 7.808-15.658667 15.616-31.317333 15.616-7.808 0-23.466667-7.808-31.274667-15.616l-156.458667-164.266667c-5.674667-8.32-10.922667-14.293333-10.922666-29.952 0-7.808 3.413333-18.901333 10.922666-24.832a37.802667 37.802667 0 0 1 54.784 0l132.949334 140.8L723.2 371.2a37.802667 37.802667 0 0 1 54.741333 0c15.658667 15.658667 15.658667 39.125333 7.850667 54.741333z"></path>
        </svg>
      </i>
    );
  }
};
