import classNames from "classnames";
export default {
  name: "IconDesignerForm",
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
          id="icondesigner-form"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M85.333333 85.333333h853.333334v170.666667H85.333333z"
            fill="#E9E9E9"
          ></path>
          <path
            d="M0 216.746667h1000.106667v85.333333H0z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334z m0 85.333333H85.333333v853.333334h853.333334V85.333333z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M310.016 445.866667a42.666667 42.666667 0 0 1 7.68 84.650666l-7.68 0.682667H197.888a42.666667 42.666667 0 0 1-7.68-84.650667l7.68-0.682666h112.128zM872.192 445.866667a42.666667 42.666667 0 0 1 7.68 84.650666l-7.68 0.682667H530.688a42.666667 42.666667 0 0 1-7.68-84.650667l7.68-0.682666h341.504zM310.016 707.925333a42.666667 42.666667 0 0 1 7.68 84.650667l-7.68 0.682667H197.888a42.666667 42.666667 0 0 1-7.68-84.650667l7.68-0.682667h112.128zM872.192 707.925333a42.666667 42.666667 0 0 1 7.68 84.650667l-7.68 0.682667H530.688a42.666667 42.666667 0 0 1-7.68-84.650667l7.68-0.682667h341.504z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
