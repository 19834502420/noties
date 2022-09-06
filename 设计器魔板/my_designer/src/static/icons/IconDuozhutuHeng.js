import classNames from "classnames";
export default {
  name: "IconDuozhutuHeng",
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
          id="iconduozhutu-heng"
          viewBox="0 0 1075 1024"
        >
          <path
            d="M0 32V1024h992a32 32 0 0 0 0-64H64V32a32 32 0 0 0-64 0z"
            fill="#5D7092"
          ></path>
          <path
            d="M928.256 363.7248a22.7328 22.7328 0 0 0-22.7328-22.784H181.0432c-12.5952 0-22.784 10.24-22.784 22.784v56.832c0 12.5952 10.24 22.784 22.784 22.784h724.48c12.544 0 22.7328-10.1888 22.7328-22.7328V363.7248z"
            fill="#5AD8A6"
          ></path>
          <path
            d="M583.5264 171.6224a22.7328 22.7328 0 0 0-22.784-22.784H181.0432c-12.5952 0-22.784 10.24-22.784 22.784v56.832c0 12.5952 10.1888 22.784 22.784 22.784h379.6992c12.5952 0 22.784-10.1888 22.784-22.7328V171.6224z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M568.4224 758.016a22.7328 22.7328 0 0 0-22.7328-22.7328H180.992c-12.544 0-22.7328 10.1888-22.7328 22.7328v56.8832c0 12.5952 10.1888 22.784 22.7328 22.784h364.6976c12.544 0 22.7328-10.24 22.7328-22.784v-56.832z"
            fill="#5AD8A6"
          ></path>
          <path
            d="M773.2224 557.1584c0-12.5952-10.1888-22.784-22.7328-22.784H181.0432c-12.5952 0-22.784 10.24-22.784 22.784v56.832c0 12.5952 10.24 22.784 22.784 22.784h569.4464c12.544 0 22.7328-10.1888 22.7328-22.7328v-56.8832z"
            fill="#5B8FF8"
          ></path>
        </svg>
      </i>
    );
  }
};
