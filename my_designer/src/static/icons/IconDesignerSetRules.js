import classNames from "classnames";
export default {
  name: "IconDesignerSetRules",
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
          id="icondesigner-set-rules"
          viewBox="0 0 1194 1024"
        >
          <path d="M611.584 440.917333c-22.784 0-42.666667 19.882667-42.666667 42.666667v483.498667c0 22.784 19.882667 42.666667 42.666667 42.666666 22.698667 0 42.666667-19.882667 42.666667-42.666666V483.584c0-22.784-19.968-42.666667-42.666667-42.666667z m-241.834667 128H56.917333c-22.784 0-42.666667 19.882667-42.666666 42.666667 0 22.698667 19.882667 42.666667 42.666666 42.666667h99.498667v312.832c0 22.784 19.968 42.666667 42.666667 42.666666 22.784 0 42.666667-19.882667 42.666666-42.666666V654.250667h128c22.784 0 42.666667-19.968 42.666667-42.666667 0-22.784-19.882667-42.666667-42.666667-42.666667z m469.333334-241.834666c0-22.698667-19.882667-42.666667-42.666667-42.666667H654.250667V56.917333c0-22.784-19.968-42.666667-42.666667-42.666666-22.784 0-42.666667 19.882667-42.666667 42.666666v227.498667H426.666667c-22.784 0-42.666667 19.968-42.666667 42.666667 0 22.784 19.882667 42.666667 42.666667 42.666666h369.749333c22.784 0 42.666667-19.882667 42.666667-42.666666z m298.666666 327.168H824.917333c-22.784 0-42.666667 19.882667-42.666666 42.666666 0 22.698667 19.882667 42.666667 42.666666 42.666667h128v227.498667c0 22.784 19.882667 42.666667 42.666667 42.666666 22.698667 0 42.666667-19.882667 42.666667-42.666666V739.584h99.498666c22.784 0 42.666667-19.968 42.666667-42.666667 0-22.784-19.882667-42.666667-42.666667-42.666666z m-938.666666-213.333334c22.784 0 42.666667-19.968 42.666666-42.666666v-341.333334c0-22.784-19.882667-42.666667-42.666666-42.666666-22.698667 0-42.666667 19.882667-42.666667 42.666666v341.333334c0 22.698667 19.968 42.666667 42.666667 42.666666z m796.501333 85.333334c22.698667 0 42.666667-19.968 42.666667-42.666667v-426.666667c0-22.784-19.968-42.666667-42.666667-42.666666-22.784 0-42.666667 19.882667-42.666667 42.666666v426.666667c0 22.698667 19.882667 42.666667 42.666667 42.666667z"></path>
        </svg>
      </i>
    );
  }
};
