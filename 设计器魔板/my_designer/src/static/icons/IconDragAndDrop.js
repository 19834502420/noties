import classNames from "classnames";
export default {
  name: "IconDragAndDrop",
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
          id="icondrag-and-drop"
          viewBox="0 0 1024 1024"
        >
          <path d="M384 256a56.32 56.32 0 0 1-51.626667-33.792 56.192 56.192 0 0 1 0.042667-103.125333 56.234667 56.234667 0 0 1 103.168 0 56.234667 56.234667 0 0 1 0 103.168C426.88 242.090667 407.04 256 384 256zM640 256a56.32 56.32 0 0 1-51.626667-33.792 56.192 56.192 0 0 1 0.042667-103.125333 56.234667 56.234667 0 0 1 103.168 0 56.234667 56.234667 0 0 1 0 103.168C682.88 242.090667 663.04 256 640 256zM384 597.333333a56.32 56.32 0 0 1-51.626667-33.792 56.192 56.192 0 0 1 0.042667-103.125333 56.234667 56.234667 0 0 1 103.168 0 56.234667 56.234667 0 0 1 0 103.168C426.88 583.424 407.04 597.333333 384 597.333333zM640 597.333333a56.32 56.32 0 0 1-51.626667-33.792 56.192 56.192 0 0 1 0.042667-103.125333 56.234667 56.234667 0 0 1 103.168 0 56.234667 56.234667 0 0 1 0 103.168c-8.661333 19.84-28.501333 33.749333-51.584 33.749333zM384 938.666667a56.32 56.32 0 0 1-51.626667-33.792 56.192 56.192 0 0 1 0.042667-103.125334 56.234667 56.234667 0 0 1 103.168 0 56.234667 56.234667 0 0 1 0 103.168C426.88 924.757333 407.04 938.666667 384 938.666667zM640 938.666667a56.32 56.32 0 0 1-51.626667-33.792 56.192 56.192 0 0 1 0.042667-103.125334 56.234667 56.234667 0 0 1 103.168 0 56.234667 56.234667 0 0 1 0 103.168c-8.661333 19.84-28.501333 33.749333-51.584 33.749334z"></path>
        </svg>
      </i>
    );
  }
};
