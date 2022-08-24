import classNames from "classnames";
export default {
  name: "IconJianhao",
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
        <svg class="icon svg-icon" id="iconjianhao" viewBox="0 0 1024 1024">
          <path d="M0 384h1024v256H0z"></path>
        </svg>
      </i>
    );
  }
};
