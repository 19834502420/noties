import classNames from "classnames";
export default {
  name: "IconFilePicture",
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
          id="iconfile-picture"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M0 0v1024h1024V191.707429L768 0H603.209143z"
            fill="#0099E8"
          ></path>
          <path d="M768 192L1024 384V192z" fill="#005C8B"></path>
          <path d="M768 192H1024L768 0" fill="#9CDDFF"></path>
          <path
            d="M704 429.714286L566.857143 594.870857 374.857143 347.428571 128 676.571429h768L704 429.714286z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
