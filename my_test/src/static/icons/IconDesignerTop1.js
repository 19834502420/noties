import classNames from "classnames";
export default {
  name: "IconDesignerTop1",
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
          id="icondesigner-top1"
          viewBox="0 0 1024 1024"
        >
          <path d="M546.157714 546.157714V1024h-68.315428V546.157714h68.315428z m341.284572-204.8v136.484572H136.557714V341.357714h750.884572zM546.157714 204.8v68.242286h-68.315428V204.8h68.315428zM1024 0v136.557714H0V0h1024z"></path>
        </svg>
      </i>
    );
  }
};
