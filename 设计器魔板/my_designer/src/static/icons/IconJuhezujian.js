import classNames from "classnames";
export default {
  name: "IconJuhezujian",
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
        <svg class="icon svg-icon" id="iconjuhezujian" viewBox="0 0 1024 1024">
          <path d="M961.462857 0H62.537143A62.537143 62.537143 0 0 0 0 62.537143v898.925714c0 34.523429 28.013714 62.537143 62.537143 62.537143h898.925714a62.537143 62.537143 0 0 0 62.537143-62.537143V62.537143A62.537143 62.537143 0 0 0 961.462857 0zM227.181714 236.836571V78.409143h67.291429v158.427428h-67.291429zM78.409143 78.409143h70.436571v158.427428h-70.436571V78.409143z m420.790857 867.181714H78.409143V668.818286h420.790857v276.772571z m0-355.181714H78.409143V315.245714h420.790857v275.163429z m446.390857 355.181714h-367.908571V315.172571h367.908571v630.418286z m0-708.754286h-572.708571V78.409143h572.708571v158.427428z"></path>
        </svg>
      </i>
    );
  }
};
