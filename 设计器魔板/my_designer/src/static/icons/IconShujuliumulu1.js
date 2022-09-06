import classNames from "classnames";
export default {
  name: "IconShujuliumulu1",
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
          id="iconshujuliumulu1"
          viewBox="0 0 1194 1024"
        >
          <path d="M1024 256H505.429333l-60.586666-170.666667H85.333333v853.333334h938.666667V256zM565.76 170.666667H1024a85.333333 85.333333 0 0 1 85.333333 85.333333v682.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h359.594667a85.333333 85.333333 0 0 1 80.384 56.832L565.76 170.666667z"></path>
          <path d="M1010.346667 938.666667c5.461333 0 15.104-8.192 16.213333-14.677334L1098.666667 512H176.213333c-5.461333 0-15.104 8.192-16.213333 14.677333L87.893333 938.666667h922.453334zM176.213333 426.666667h938.666667c47.104 0 78.592 38.229333 70.4 85.333333l-74.666667 426.666667c-8.192 47.104-53.077333 85.333333-100.266666 85.333333h-938.666667c-47.104 0-78.592-38.229333-70.4-85.333333L75.946667 512c8.192-47.104 53.077333-85.333333 100.266666-85.333333z"></path>
        </svg>
      </i>
    );
  }
};
