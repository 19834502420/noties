import classNames from "classnames";
export default {
  name: "IconDesignerCheckbox",
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
          id="icondesigner-checkbox"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333zM805.12 319.402667a42.666667 42.666667 0 0 1 6.741333 54.272l-4.778666 5.973333-284.501334 303.274667-1.536 1.536a85.333333 85.333333 0 0 1-112.810666 3.072l-7.765334-7.338667-133.973333-143.786667a42.666667 42.666667 0 0 1 56.746667-63.317333l5.717333 5.12 133.973333 143.786667 281.941334-300.629334a42.666667 42.666667 0 0 1 60.245333-1.962666z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
