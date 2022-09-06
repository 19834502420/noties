import classNames from "classnames";
export default {
  name: "IconRelation",
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
        <svg class="icon svg-icon" id="iconrelation" viewBox="0 0 1024 1024">
          <path d="M896.298667 332.416c23.296 0 42.154667 19.370667 42.154666 43.306667v519.68c0 23.893333-18.858667 43.264-42.154666 43.264H390.314667c-23.296 0-42.154667-19.370667-42.154667-43.306667V776.533333h84.352v75.605334h421.632V419.029333l-93.952 0.042667V332.416h136.106667zM633.258667 85.333333c23.296 0 42.154667 19.370667 42.154666 43.306667V332.373333h0.426667v86.656l-0.426667-0.042666v229.248c0 23.893333-18.858667 43.306667-42.154666 43.306666H127.274667c-23.296 0-42.154667-19.370667-42.154667-43.306666V128.597333C85.12 104.746667 103.978667 85.333333 127.274667 85.333333h505.984z m-42.197334 86.570667H169.429333v433.066667h421.632V171.861333zM507.264 332.373333v86.656H432.512v99.498667H348.16V375.722667c0-23.893333 18.858667-43.306667 42.154667-43.306667h116.949333z"></path>
        </svg>
      </i>
    );
  }
};
