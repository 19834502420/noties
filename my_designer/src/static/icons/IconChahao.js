import classNames from "classnames";
export default {
  name: "IconChahao",
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
        <svg class="icon svg-icon" id="iconchahao" viewBox="0 0 1024 1024">
          <path d="M1024 170.715429L682.715429 512 1024 853.284571 853.284571 1024 512 682.569143 170.715429 1024 0 853.284571 341.284571 512 0 170.715429 170.715429 0 512 341.284571 853.284571 0z"></path>
        </svg>
      </i>
    );
  }
};
