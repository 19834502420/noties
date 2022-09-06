import classNames from "classnames";
export default {
  name: "IconTu5",
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
        <svg class="icon svg-icon" id="icontu5" viewBox="0 0 1024 1024">
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 1 1 0 64z"
            fill="#000000"
          ></path>
          <path
            d="M829.44 634.88a61.44 61.44 0 1 1 0-122.88 61.44 61.44 0 0 1 0 122.88z m-153.6-245.76a92.16 92.16 0 1 1 0-184.32 92.16 92.16 0 0 1 0 184.32zM460.8 757.76A122.88 122.88 0 1 1 460.8 512a122.88 122.88 0 0 1 0 245.76z m-245.76 61.44a61.44 61.44 0 1 1 0.170667-122.88 61.44 61.44 0 0 1-0.170667 122.88z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
