import classNames from "classnames";
export default {
  name: "IconBusinessTravelTips",
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
          id="iconbusiness-travel-tips"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512-229.376-512-512-512m0 950.869333A438.954667 438.954667 0 1 1 512.170667 72.96 438.954667 438.954667 0 0 1 512 950.869333M469.504 404.48v371.797333a42.410667 42.410667 0 1 0 84.992 0V404.48a42.410667 42.410667 0 1 0-84.992 0zM463.701333 253.44c0 26.794667 21.504 48.298667 48.298667 48.298667a48.213333 48.213333 0 0 0 48.298667-48.298667A48.554667 48.554667 0 0 0 512 205.226667a48.213333 48.213333 0 0 0-48.298667 48.298666z"></path>
        </svg>
      </i>
    );
  }
};
