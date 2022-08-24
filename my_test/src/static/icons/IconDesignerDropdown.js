import classNames from "classnames";
export default {
  name: "IconDesignerDropdown",
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
          id="icondesigner-dropdown"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333zM770.56 352.768a42.666667 42.666667 0 0 1 7.936 54.016l-4.608 6.229333-203.52 226.816c-2.645333 2.901333-2.645333 2.901333-5.546667 5.546667a76.8 76.8 0 0 1-100.949333 2.048l-7.509333-7.253333-206.08-226.986667a42.666667 42.666667 0 0 1 57.514666-62.549333l5.717334 5.12 199.594666 219.989333 197.290667-219.733333a42.666667 42.666667 0 0 1 60.245333-3.242667z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
