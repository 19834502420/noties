import classNames from "classnames";
export default {
  name: "IconDesignerResponseTable",
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
          id="icondesigner-response-table"
          viewBox="0 0 1024 1024"
        >
          <path d="M938.666667 0a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334zM344.917333 85.333333H85.333333v229.717334h146.176a42.666667 42.666667 0 0 1 7.68 84.650666l-7.68 0.682667H85.333333V581.973333h146.176a42.666667 42.666667 0 0 1 7.68 84.736l-7.68 0.682667L85.333333 667.306667V938.666667h259.584V85.333333zM938.666667 85.333333H430.250667v853.333334H938.666667V667.306667H534.357333a42.666667 42.666667 0 0 1-7.68-84.565334l7.68-0.682666L938.666667 581.973333V400.384H534.357333a42.666667 42.666667 0 0 1-7.68-84.650667l7.68-0.682666H938.666667V85.333333z"></path>
        </svg>
      </i>
    );
  }
};
