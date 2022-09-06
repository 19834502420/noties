import classNames from "classnames";
export default {
  name: "IconDesignerAmount",
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
          id="icondesigner-amount"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333zM691.370667 241.664a42.666667 42.666667 0 0 1 10.837333 53.589333l-4.266667 6.4-101.205333 126.037334H727.04a39.509333 39.509333 0 1 1 0 79.018666H569.429333v77.141334H727.04a39.509333 39.509333 0 0 1 0 79.104l-157.610667-0.085334v126.634667a39.509333 39.509333 0 1 1-79.018666 0V662.869333H338.602667a39.509333 39.509333 0 1 1 0-78.933333l151.808-0.085333v-77.141334H338.602667a39.509333 39.509333 0 1 1 0-79.018666h113.749333L351.232 301.653333a42.666667 42.666667 0 0 1 66.56-53.418666l106.752 133.034666 106.837333-133.034666a42.666667 42.666667 0 0 1 59.989334-6.570667z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
