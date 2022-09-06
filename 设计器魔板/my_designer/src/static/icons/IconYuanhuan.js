import classNames from "classnames";
export default {
  name: "IconYuanhuan",
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
        <svg class="icon svg-icon" id="iconyuanhuan" viewBox="0 0 1024 1024">
          <path d="M512 0a512 512 0 1 1 0 1024 512 512 0 0 1 0-1024z m0 256a256 256 0 1 0 0 512 256 256 0 0 0 0-512z"></path>
        </svg>
      </i>
    );
  }
};
