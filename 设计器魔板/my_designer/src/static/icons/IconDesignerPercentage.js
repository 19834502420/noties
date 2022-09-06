import classNames from "classnames";
export default {
  name: "IconDesignerPercentage",
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
          id="icondesigner-percentage"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M829.184 638.208a192 192 0 1 1 0 384 192 192 0 0 1 0-384zM970.837333 45.226667a42.666667 42.666667 0 0 1 4.864 54.442666l-4.864 5.973334L98.474667 977.749333a42.666667 42.666667 0 0 1-65.28-54.357333l4.949333-5.973333L910.506667 45.226667a42.666667 42.666667 0 0 1 60.416 0z m-141.653333 678.314666a106.666667 106.666667 0 1 0 0 213.333334 106.666667 106.666667 0 0 0 0-213.333334zM193.194667 0a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m0 85.333333a106.666667 106.666667 0 1 0 0 213.333334 106.666667 106.666667 0 0 0 0-213.333334z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
