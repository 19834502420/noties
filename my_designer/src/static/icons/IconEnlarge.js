import classNames from "classnames";
export default {
  name: "IconEnlarge",
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
        <svg class="icon svg-icon" id="iconenlarge" viewBox="0 0 1024 1024">
          <path d="M448 42.666667a405.333333 405.333333 0 0 1 405.333333 405.333333 403.626667 403.626667 0 0 1-90.112 254.848l156.714667 156.714667a42.666667 42.666667 0 0 1-56.32 63.914666l-4.053333-3.541333-156.714667-156.714667A403.626667 403.626667 0 0 1 448 853.333333a405.333333 405.333333 0 0 1 0-810.666666z m0 85.333333a320 320 0 1 0 0 640 320 320 0 0 0 0-640z m0 149.333333a42.666667 42.666667 0 0 1 42.368 37.674667l0.298667 4.992v85.333333h85.333333a42.666667 42.666667 0 0 1 4.992 85.034667l-4.992 0.298667h-85.333333v85.333333a42.666667 42.666667 0 0 1-85.034667 4.992L405.333333 576v-85.333333h-85.333333a42.666667 42.666667 0 0 1-4.992-85.034667L320 405.333333h85.333333v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"></path>
        </svg>
      </i>
    );
  }
};
