import classNames from "classnames";
export default {
  name: "IconQuestionMark",
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
          id="iconquestion-mark"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667z m0 85.333333a384 384 0 1 0 0 768 384 384 0 0 0 0-768z m0 564.053333a53.034667 53.034667 0 1 1 0 106.112 53.034667 53.034667 0 0 1 0-106.069333z m0-466.218666a170.666667 170.666667 0 0 1 49.28 334.122666l-6.613333 1.792v48.085334a42.666667 42.666667 0 0 1-37.674667 42.410666l-4.992 0.256a42.666667 42.666667 0 0 1-42.368-37.674666L469.333333 609.834667v-85.333334a42.666667 42.666667 0 0 1 37.674667-42.368l4.992-0.298666a85.333333 85.333333 0 1 0-85.333333-85.333334 42.666667 42.666667 0 0 1-85.333334 0 170.666667 170.666667 0 0 1 170.666667-170.666666z"></path>
        </svg>
      </i>
    );
  }
};
