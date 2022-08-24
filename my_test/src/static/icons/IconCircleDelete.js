import classNames from "classnames";
export default {
  name: "IconCircleDelete",
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
          id="iconcircle-delete"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 42.666667C252.8 42.666667 42.666667 252.8 42.666667 512s210.133333 469.333333 469.333333 469.333333 469.333333-210.133333 469.333333-469.333333S771.2 42.666667 512 42.666667z m0 85.333333a384 384 0 1 1 0 768 384 384 0 0 1 0-768z"></path>
          <path d="M602.496 361.130667a42.666667 42.666667 0 0 1 63.914667 56.32l-3.541334 4.053333-241.365333 241.365333a42.666667 42.666667 0 0 1-63.914667-56.32l3.541334-4.053333 241.365333-241.365333z"></path>
          <path d="M361.130667 361.130667a42.666667 42.666667 0 0 1 56.32-3.541334l4.053333 3.541334 241.365333 241.365333a42.666667 42.666667 0 0 1-56.32 63.914667l-4.053333-3.541334-241.365333-241.365333a42.666667 42.666667 0 0 1 0-60.373333z"></path>
        </svg>
      </i>
    );
  }
};
