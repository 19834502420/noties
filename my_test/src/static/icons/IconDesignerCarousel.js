import classNames from "classnames";
export default {
  name: "IconDesignerCarousel",
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
          id="icondesigner-carousel"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M51.2 170.666667H85.333333v682.666666H51.2a51.2 51.2 0 0 1-51.2-51.2V221.866667A51.2 51.2 0 0 1 51.2 170.666667z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M256 85.333333h512v853.333334H256z"
            fill="#4A4A4A"
            opacity=".12"
          ></path>
          <path
            d="M729.941333 42.666667H294.058667a128 128 0 0 0-128 128v682.666666a128 128 0 0 0 128 128h435.882666a128 128 0 0 0 128-128V170.666667a128 128 0 0 0-128-128z m-435.882666 85.333333h435.882666a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H294.058667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M972.8 170.666667H938.666667v682.666666h34.133333a51.2 51.2 0 0 0 51.2-51.2V221.866667a51.2 51.2 0 0 0-51.2-51.2z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
