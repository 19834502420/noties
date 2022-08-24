import classNames from "classnames";
export default {
  name: "IconSolidDelete",
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
          id="iconsolid-delete"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m0 85.333333a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m170.666667 341.333333a42.666667 42.666667 0 0 1 5.333333 84.992L682.666667 554.666667H341.333333a42.666667 42.666667 0 0 1-5.333333-84.992L341.333333 469.333333h341.333334z"></path>
        </svg>
      </i>
    );
  }
};
