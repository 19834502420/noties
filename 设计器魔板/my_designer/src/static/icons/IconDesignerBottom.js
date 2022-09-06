import classNames from "classnames";
export default {
  name: "IconDesignerBottom",
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
          id="icondesigner-bottom"
          viewBox="0 0 1024 1024"
        >
          <path d="M546.157714 477.842286V0h-68.315428v477.842286h68.315428z m341.284572 204.8V546.157714H136.557714v136.484572h750.884572zM546.157714 819.2v-68.242286h-68.315428v68.242286h68.315428zM1024 1024v-136.557714H0V1024h1024z"></path>
        </svg>
      </i>
    );
  }
};
