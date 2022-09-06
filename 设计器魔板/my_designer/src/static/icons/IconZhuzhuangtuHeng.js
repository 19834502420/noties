import classNames from "classnames";
export default {
  name: "IconZhuzhuangtuHeng",
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
          id="iconzhuzhuangtu-heng"
          viewBox="0 0 1075 1024"
        >
          <path
            d="M0 32V1024h992a32 32 0 0 0 0-64H64V32a32 32 0 0 0-64 0z"
            fill="#5D7092"
          ></path>
          <path
            d="M668.0064 363.5712a22.6304 22.6304 0 0 0-22.6304-22.6304H180.8896a22.6304 22.6304 0 0 0-22.6304 22.6304v56.576c0 12.4928 10.1376 22.6304 22.6304 22.6304h464.4864a22.6304 22.6304 0 0 0 22.6304-22.6304V363.5712z m-101.8368 394.3424a22.6304 22.6304 0 0 0-22.6304-22.6304H180.8896a22.6304 22.6304 0 0 0-22.6304 22.6304v56.576c0 12.4928 10.1376 22.6304 22.6304 22.6304h362.6496a22.6304 22.6304 0 0 0 22.6304-22.6304v-56.576z m203.6736-200.9088a22.6304 22.6304 0 0 0-22.6304-22.6304H180.9408a22.6304 22.6304 0 0 0-22.6816 22.6304v56.576c0 12.4928 10.1376 22.6304 22.6304 22.6304h566.272a22.6304 22.6304 0 0 0 22.6816-22.6304V557.056z m169.728-385.536a22.6304 22.6304 0 0 0-22.6304-22.6304H180.8896a22.6304 22.6304 0 0 0-22.6304 22.6304v56.576c0 12.4928 10.1376 22.6304 22.6304 22.6304H916.992a22.6304 22.6304 0 0 0 22.6304-22.6304V171.52z"
            fill="#5B8FF8"
          ></path>
        </svg>
      </i>
    );
  }
};
