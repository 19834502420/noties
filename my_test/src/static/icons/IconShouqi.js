import classNames from "classnames";
export default {
  name: "IconShouqi",
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
        <svg class="icon svg-icon" id="iconshouqi" viewBox="0 0 1024 1024">
          <path
            d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
            fill="#B4B4B4"
          ></path>
          <path
            d="M484.544 539.456V832L192 539.456h292.544zM539.52 192L832 484.544H539.456V192z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
