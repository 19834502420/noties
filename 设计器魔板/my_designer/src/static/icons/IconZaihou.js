import classNames from "classnames";
export default {
  name: "IconZaihou",
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
        <svg class="icon svg-icon" id="iconzaihou" viewBox="0 0 2252 1024">
          <path d="M1740.8 0a512 512 0 1 0 0 1024 512 512 0 0 0 0-1024zM694.9888 139.776a30.72 30.72 0 0 0-30.72 30.72v204.0832l-633.6512 1.7408a30.72 30.72 0 0 0-30.6176 30.72v210.7392a30.72 30.72 0 0 0 30.72 30.72l633.5488-1.7408v206.4384a30.72 30.72 0 0 0 51.0976 22.9376l385.1264-342.4256a30.72 30.72 0 0 0 0-46.08L715.1616 147.456a30.72 30.72 0 0 0-20.2752-7.68zM1740.8 204.8a307.2 307.2 0 1 1 0 614.4 307.2 307.2 0 0 1 0-614.4z"></path>
        </svg>
      </i>
    );
  }
};
