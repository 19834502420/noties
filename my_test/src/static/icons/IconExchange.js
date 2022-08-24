import classNames from "classnames";
export default {
  name: "IconExchange",
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
        <svg class="icon svg-icon" id="iconexchange" viewBox="0 0 1024 1024">
          <path
            d="M345.6 288c-70.4 0-140.8 32-185.6 76.8S83.2 480 83.2 550.4c0 25.6-19.2 38.4-38.4 38.4S0 576 0 550.4c0-89.6 38.4-179.2 102.4-243.2S256 204.8 345.6 204.8h396.8L601.6 64c-19.2-19.2-19.2-44.8 0-57.6 19.2-19.2 44.8-19.2 57.6 0l211.2 211.2c6.4 6.4 12.8 19.2 12.8 32s-6.4 19.2-12.8 32L665.6 486.4c-6.4 6.4-19.2 12.8-32 12.8s-19.2-6.4-32-12.8c-19.2-19.2-19.2-44.8 0-57.6L736 294.4H345.6z m640 147.2c19.2 0 38.4 12.8 38.4 38.4 0 89.6-38.4 179.2-102.4 243.2S768 819.2 678.4 819.2H288L428.8 960c19.2 19.2 19.2 44.8 0 57.6-12.8 0-25.6 6.4-32 6.4s-19.2-6.4-32-12.8L153.6 800c-6.4-6.4-12.8-19.2-12.8-32s6.4-19.2 12.8-32l204.8-204.8c19.2-19.2 44.8-19.2 57.6 0 19.2 19.2 19.2 44.8 0 57.6L281.6 723.2h403.2c70.4 0 134.4-25.6 185.6-76.8 51.2-51.2 76.8-115.2 76.8-185.6-6.4-12.8 12.8-25.6 38.4-25.6z"
            fill="#666666"
          ></path>
        </svg>
      </i>
    );
  }
};
