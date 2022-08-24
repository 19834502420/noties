import classNames from "classnames";
export default {
  name: "IconDesignerText",
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
          id="icondesigner-text"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M114.688 379.904L114.602667 126.293333h794.709333v253.696h85.333333V40.789333H29.354667v339.114667zM114.688 644.522667l-0.085333 253.781333h794.709333V644.522667h85.333333v339.114666H29.354667V644.522667z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M0 438.442667h143.957333v142.165333H0zM880.042667 438.442667H1024v142.165333h-143.957333z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M744.106667 279.893333H279.893333v154.709334l77.397334-77.312h116.053333v348.16h-77.482667v38.656h232.277334v-38.741334h-77.397334V357.290667h115.968l77.397334 77.312v-77.312z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
