import classNames from "classnames";
export default {
  name: "IconXingzhuangjiehebeifen",
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
          id="iconxingzhuangjiehebeifen"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 787.692308a118.153846 118.153846 0 1 1 0 236.307692 118.153846 118.153846 0 0 1 0-236.307692z m0-393.846154a118.153846 118.153846 0 1 1 0 236.307692 118.153846 118.153846 0 0 1 0-236.307692z m0-393.846154a118.153846 118.153846 0 1 1 0 236.307692 118.153846 118.153846 0 0 1 0-236.307692z"></path>
        </svg>
      </i>
    );
  }
};
