import classNames from "classnames";
export default {
  name: "IconFileExcel",
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
        <svg class="icon svg-icon" id="iconfile-excel" viewBox="0 0 1024 1024">
          <path d="M0 0v1024h1024V191.68L768 0H603.2z" fill="#029D55"></path>
          <path d="M768 192l256 192V192z" fill="#017D44"></path>
          <path d="M768 192h256l-256-192" fill="#5EE3A6"></path>
          <path
            d="M630.464 720h89.6L556.672 491.84l134.272-187.84h-89.6L512 428.8 422.528 304H332.992l134.272 187.712L304 720H512v-56.192H432.192L512 553.664z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
