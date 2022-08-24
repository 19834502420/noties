import classNames from "classnames";
export default {
  name: "IconDesignerTextColor",
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
          id="icondesigner-text-color"
          viewBox="0 0 1024 1024"
        >
          <path d="M389.12 419.766857h248.173714L513.243429 102.838857 389.12 419.84zM1024 832V1024H0v-192h1024zM559.689143 0L819.2 640H712.704l-50.980571-136.996571H364.470857L311.296 640H204.8L466.505143 0h93.184z"></path>
        </svg>
      </i>
    );
  }
};
