import classNames from "classnames";
export default {
  name: "IconButtonClose",
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
          id="iconbutton-close"
          viewBox="0 0 1024 1024"
        >
          <path d="M0 0h1024v1024H0z" fill="#C62216"></path>
          <path
            d="M512 452.754286L349.037714 289.645714a42.642286 42.642286 0 1 0-59.318857 59.392L452.681143 512 289.718857 674.962286a42.642286 42.642286 0 1 0 59.245714 59.318857L512 571.318857l162.962286 162.962286a42.642286 42.642286 0 0 0 59.318857-59.245714L571.318857 512l162.962286-162.962286a42.642286 42.642286 0 1 0-59.245714-59.318857L512 452.681143z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
