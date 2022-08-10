import classNames from "classnames";
export default {
  name: "IconFileTxt",
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
        <svg class="icon svg-icon" id="iconfile-txt" viewBox="0 0 1024 1024">
          <path
            d="M0 0v1024h1024V191.707429L768 0H603.209143z"
            fill="#F6B502"
          ></path>
          <path d="M768 192L1024 384V192z" fill="#CC9601"></path>
          <path d="M768 192H1024L768 0" fill="#FFEB92"></path>
          <path
            d="M273.408 288.036571L256 367.908571h192L351.963429 768h112.054857l95.963428-400.018286h192l16.018286-79.945143z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
