import classNames from "classnames";
export default {
  name: "IconDesignerDate",
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
          id="icondesigner-date"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M726.186667 52.736a40.96 40.96 0 0 1 40.96 40.96v13.397333H938.666667a85.333333 85.333333 0 0 1 85.333333 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-682.666666a85.333333 85.333333 0 0 1 85.333333-85.333334h171.861334v-13.397333a40.96 40.96 0 0 1 81.92 0v13.397333H685.226667v-13.397333a40.96 40.96 0 0 1 40.96-40.96zM938.666667 498.517333H85.333333v376.661334h853.333334V498.517333zM257.194667 192.426667H85.333333v224.170666h853.333334V192.512H767.146667v37.717333a40.96 40.96 0 1 1-81.92 0v-37.802666H339.114667v37.802666a40.96 40.96 0 1 1-81.92 0v-37.802666z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
