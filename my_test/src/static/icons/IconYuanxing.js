import classNames from "classnames";
export default {
  name: "IconYuanxing",
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
        <svg class="icon svg-icon" id="iconyuanxing" viewBox="0 0 1024 1024">
          <path
            d="M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m0 66.56a445.44 445.44 0 1 0 0 890.88 445.44 445.44 0 0 0 0-890.88z"
            fill="#5D7092"
          ></path>
          <path
            d="M512 153.6a358.4 358.4 0 1 1 0 716.8 358.4 358.4 0 0 1 0-716.8z"
            fill="#CDDCFB"
          ></path>
        </svg>
      </i>
    );
  }
};
