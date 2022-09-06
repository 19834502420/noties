import classNames from "classnames";
export default {
  name: "IconZaiqian",
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
        <svg class="icon svg-icon" id="iconzaiqian" viewBox="0 0 2252 1024">
          <path d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m1045.8112 139.776a30.72 30.72 0 0 1 30.72 30.72v204.0832l633.6512 1.7408a30.72 30.72 0 0 1 30.6176 30.72v210.7392a30.72 30.72 0 0 1-30.72 30.72l-633.5488-1.7408v206.4384a30.72 30.72 0 0 1-51.0976 22.9376l-385.1264-342.4256a30.72 30.72 0 0 1 0-46.08l385.2288-340.1728a30.72 30.72 0 0 1 20.2752-7.68zM512 204.8a307.2 307.2 0 1 0 0 614.4 307.2 307.2 0 0 0 0-614.4z"></path>
        </svg>
      </i>
    );
  }
};
