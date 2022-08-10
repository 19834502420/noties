import classNames from "classnames";
export default {
  name: "IconAscendingOrder",
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
          id="iconascending-order"
          viewBox="0 0 1024 1024"
        >
          <path d="M768 469.333333c-133.12-45.397333-207.274667-165.205333-256-256-48.682667 90.794667-122.88 210.602667-256 256h512z"></path>
          <path d="M768 554.666667c-133.12 45.397333-207.274667 165.205333-256 256-48.682667-90.794667-122.88-210.602667-256-256h512z"></path>
        </svg>
      </i>
    );
  }
};
