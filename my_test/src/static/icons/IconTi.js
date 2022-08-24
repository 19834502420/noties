import classNames from "classnames";
export default {
  name: "IconTi",
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
        <svg class="icon svg-icon" id="iconTI" viewBox="0 0 1024 1024">
          <path d="M448 1024V165.504h252.16V0H0v165.504h255.104V1024h193.024zM1024 1024V0H827.136v1024H1024z"></path>
        </svg>
      </i>
    );
  }
};
