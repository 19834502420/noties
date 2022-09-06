import classNames from "classnames";
export default {
  name: "IconWarning",
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
        <svg class="icon svg-icon" id="iconwarning" viewBox="0 0 1024 1024">
          <path d="M844.8 179.2C759.466667 93.866667 640 42.666667 512 42.666667S264.533333 93.866667 179.2 179.2 42.666667 384 42.666667 512s51.2 247.466667 136.533333 332.8S379.733333 981.333333 512 981.333333c132.266667 0 247.466667-51.2 332.8-136.533333S981.333333 644.266667 981.333333 512c0-132.266667-51.2-247.466667-136.533333-332.8zM469.333333 256v-4.266667c4.266667-21.333333 21.333333-38.4 42.666667-38.4s38.4 17.066667 42.666667 38.4v349.866667c-4.266667 21.333333-21.333333 38.4-42.666667 38.4s-38.4-17.066667-42.666667-38.4V256z m42.666667 533.333333c-29.866667 0-51.2-25.6-51.2-51.2S482.133333 682.666667 512 682.666667s51.2 25.6 51.2 51.2-21.333333 55.466667-51.2 55.466666z"></path>
        </svg>
      </i>
    );
  }
};
