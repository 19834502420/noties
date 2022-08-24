import classNames from "classnames";
export default {
  name: "IconXiela",
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
        <svg class="icon svg-icon" id="iconxiela" viewBox="0 0 1280 1024">
          <path
            d="M876.373333 574.72l-147.626666 113.493333-101.546667-128-150.442667 115.797334 139.434667 175.786666L85.333333 853.333333l129.962667-506.794666 139.52 175.786666 150.442667-115.712-101.546667-128 147.626667-113.493333 101.546666 128 150.442667-115.797333L663.722667 1.536 1194.666667 0l-129.962667 506.88-139.434667-175.786667L774.826667 446.72z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M518.826667 799.146667L172.373333 797.866667l82.773334-336.469334 105.472 135.082667 229.290666-179.114667L485.546667 284.16l63.402666-49.493333 104.277334 133.376 229.290666-179.2L776.874667 53.930667l346.453333 1.109333-82.688 336.469333L935.253333 256.341333l-229.290666 179.2 104.277333 133.376-63.402667 49.493334L642.56 484.949333l-229.290667 179.2z"
            fill="#0F0F0F"
          ></path>
        </svg>
      </i>
    );
  }
};
