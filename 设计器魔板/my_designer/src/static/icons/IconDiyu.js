import classNames from "classnames";
export default {
  name: "IconDiyu",
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
        <svg class="icon svg-icon" id="icondiyu" viewBox="0 0 1024 1024">
          <path
            d="M462.607059 31.984941v505.675294c0 2.891294 0 2.891294 2.861176 2.891294l2.861177 2.861177h520.041412c0 270.064941-226.966588 479.834353-499.952942 479.834353C215.521882 1023.247059 0 810.616471 0 540.551529 0 270.456471 195.373176 31.984941 462.607059 31.984941"
            fill="#E69D68"
          ></path>
          <path
            d="M525.793882 0.391529c270.064941 0 494.170353 209.739294 494.170353 479.804236H531.576471c-2.891294 0-2.891294 0-2.891295-2.861177l-2.861176-2.891294V0.391529z"
            fill="#EEC2A2"
          ></path>
        </svg>
      </i>
    );
  }
};
