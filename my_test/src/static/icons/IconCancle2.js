import classNames from "classnames";
export default {
  name: "IconCancle2",
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
        <svg class="icon svg-icon" id="iconcancle-2" viewBox="0 0 1024 1024">
          <path d="M324.821333 264.96l4.010667 3.541333L512 451.626667l183.168-183.125334a42.666667 42.666667 0 0 1 63.872 56.32l-3.541333 4.010667L572.373333 512l183.125334 183.168a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333L512 572.373333l-183.168 183.125334a42.666667 42.666667 0 0 1-63.872-56.32l3.541333-4.010667L451.626667 512 268.501333 328.832a42.666667 42.666667 0 0 1 56.32-63.872z"></path>
        </svg>
      </i>
    );
  }
};
