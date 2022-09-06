import classNames from "classnames";
export default {
  name: "IconDesignerMiddle",
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
          id="icondesigner-middle"
          viewBox="0 0 1024 1024"
        >
          <path d="M546.157714 850.212571V1024h-68.315428v-173.787429h68.315428zM921.6 624.64v150.308571H102.4V624.713143h819.2V624.64zM546.157714 474.404571v75.190858h-68.315428V474.404571h68.315428zM1024 248.978286v150.308571H0V248.978286h1024zM546.157714 0v173.787429h-68.315428V0h68.315428z"></path>
        </svg>
      </i>
    );
  }
};
