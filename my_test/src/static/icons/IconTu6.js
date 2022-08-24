import classNames from "classnames";
export default {
  name: "IconTu6",
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
        <svg class="icon svg-icon" id="icontu6" viewBox="0 0 1024 1024">
          <path
            d="M512 0a33.28 33.28 0 1 1-2.389333 66.56L512 66.304V66.56h-2.645333H512a445.44 445.44 0 1 0 445.44 446.122667A33.28 33.28 0 1 1 1024 512a512 512 0 1 1-515.072-512H512z m0 192c18.432 0.256 33.28 15.104 33.28 33.450667a32.256 32.256 0 0 1-33.28 32.085333A254.464 254.464 0 1 0 766.464 512a33.28 33.28 0 0 1 33.28-33.28 32.426667 32.426667 0 0 1 32.256 33.28A320 320 0 1 1 512 192z"
            fill="#000000"
          ></path>
          <path
            d="M602.026667 7.850667a512.682667 512.682667 0 0 1 405.162666 373.418666L610.986667 485.888a102.570667 102.570667 0 0 0-81.066667-74.666667L602.112 7.850667z"
            fill="#C4C4C4"
          ></path>
          <path
            d="M512 384a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 51.2a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
