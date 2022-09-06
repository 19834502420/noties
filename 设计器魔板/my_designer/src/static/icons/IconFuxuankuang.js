import classNames from "classnames";
export default {
  name: "IconFuxuankuang",
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
        <svg class="icon svg-icon" id="iconfuxuankuang" viewBox="0 0 1024 1024">
          <path
            d="M307.2 25.6v256a25.6 25.6 0 0 1-25.6 25.6h-256a25.6 25.6 0 0 1-25.6-25.6v-256A25.6 25.6 0 0 1 25.6 0h256a25.6 25.6 0 0 1 25.6 25.6zM307.2 384v256a25.6 25.6 0 0 1-25.6 25.6h-256a25.6 25.6 0 0 1-25.6-25.6v-256A25.6 25.6 0 0 1 25.6 358.4h256a25.6 25.6 0 0 1 25.6 25.6z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M281.6 716.8a25.6 25.6 0 0 1 25.6 25.6v256a25.6 25.6 0 0 1-25.6 25.6h-256a25.6 25.6 0 0 1-25.6-25.6v-256a25.6 25.6 0 0 1 25.6-25.6h256zM256 768H51.2v204.8h204.8v-204.8z"
            fill="#5D7092"
          ></path>
          <path
            d="M1126.4 76.8v153.6a25.6 25.6 0 0 1-25.6 25.6h-665.6a25.6 25.6 0 0 1-25.6-25.6v-153.6a25.6 25.6 0 0 1 25.6-25.6h665.6a25.6 25.6 0 0 1 25.6 25.6zM1126.4 435.2v153.6a25.6 25.6 0 0 1-25.6 25.6h-665.6a25.6 25.6 0 0 1-25.6-25.6v-153.6a25.6 25.6 0 0 1 25.6-25.6h665.6a25.6 25.6 0 0 1 25.6 25.6zM1126.4 793.6v153.6a25.6 25.6 0 0 1-25.6 25.6h-665.6a25.6 25.6 0 0 1-25.6-25.6v-153.6a25.6 25.6 0 0 1 25.6-25.6h665.6a25.6 25.6 0 0 1 25.6 25.6z"
            fill="#CDDCFB"
          ></path>
        </svg>
      </i>
    );
  }
};
