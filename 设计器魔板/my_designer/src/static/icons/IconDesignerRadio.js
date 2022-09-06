import classNames from "classnames";
export default {
  name: "IconDesignerRadio",
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
          id="icondesigner-radio"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 85.333333a426.666667 426.666667 0 1 0 0 853.333334A426.666667 426.666667 0 0 0 512 85.333333z m0 256a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
