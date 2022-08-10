import classNames from "classnames";
export default {
  name: "IconJuxing",
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
        <svg class="icon svg-icon" id="iconjuxing" viewBox="0 0 1280 1024">
          <path
            d="M1280 64v896a64 64 0 0 1-64 64H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64h1152a64 64 0 0 1 64 64z m-102.4 19.2H102.4a19.2 19.2 0 0 0-19.2 19.2v819.2a19.2 19.2 0 0 0 19.2 19.2h1075.2a19.2 19.2 0 0 0 19.2-19.2V102.4a19.2 19.2 0 0 0-19.2-19.2z"
            fill="#5D7092"
          ></path>
          <path d="M192 192h896v640H192z" fill="#CDDCFB"></path>
        </svg>
      </i>
    );
  }
};
