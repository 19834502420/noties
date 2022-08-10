import classNames from "classnames";
export default {
  name: "IconShurukuang",
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
        <svg class="icon svg-icon" id="iconshurukuang" viewBox="0 0 1251 1024">
          <path
            d="M1251.555556 56.888889v910.222222a56.888889 56.888889 0 0 1-56.888889 56.888889H56.888889a56.888889 56.888889 0 0 1-56.888889-56.888889V56.888889a56.888889 56.888889 0 0 1 56.888889-56.888889h1137.777778a56.888889 56.888889 0 0 1 56.888889 56.888889z m-98.417778 26.339555H98.417778a17.066667 17.066667 0 0 0-17.066667 17.066667v823.466667a17.066667 17.066667 0 0 0 17.066667 17.066666h1054.72a17.066667 17.066667 0 0 0 17.066666-17.066666V100.181333a17.066667 17.066667 0 0 0-17.066666-17.066666z"
            fill="#D0DBF0"
          ></path>
          <path
            d="M1194.666667 113.777778v796.444444a56.888889 56.888889 0 0 1-56.888889 56.888889H113.777778a56.888889 56.888889 0 0 1-56.888889-56.888889V113.777778a56.888889 56.888889 0 0 1 56.888889-56.888889h1024a56.888889 56.888889 0 0 1 56.888889 56.888889z m-91.022223 17.066666H147.911111a17.066667 17.066667 0 0 0-17.066667 17.066667v728.177778a17.066667 17.066667 0 0 0 17.066667 17.066667h955.733333a17.066667 17.066667 0 0 0 17.066667-17.066667V147.911111a17.066667 17.066667 0 0 0-17.066667-17.066667z"
            fill="#5B8FF8"
          ></path>
          <path d="M1024 512v284.444444h-284.444444z" fill="#D0DBF0"></path>
          <path
            d="M227.555556 227.555556m56.888888 0l0 0q56.888889 0 56.888889 56.888888l0 455.111112q0 56.888889-56.888889 56.888888l0 0q-56.888889 0-56.888888-56.888888l0-455.111112q0-56.888889 56.888888-56.888888Z"
            fill="#5D7092"
          ></path>
        </svg>
      </i>
    );
  }
};
