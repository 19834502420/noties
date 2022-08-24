import classNames from "classnames";
export default {
  name: "IconDanxuankuang",
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
          id="icondanxuankuang"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M307.2 512a153.6 153.6 0 1 1-307.2 0 153.6 153.6 0 0 1 307.2 0z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M153.6 716.8a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m0 51.2a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8zM153.6 0a153.6 153.6 0 1 1 0 307.2 153.6 153.6 0 0 1 0-307.2z m0 51.2a102.4 102.4 0 1 0 0 204.8 102.4 102.4 0 0 0 0-204.8z"
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
