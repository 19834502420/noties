import classNames from "classnames";
export default {
  name: "IconSqlServerrizhi",
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
          id="iconSqlServerrizhi"
          viewBox="0 0 1024 1024"
        >
          <path d="M219.501714 73.142857v73.142857h-109.714285a36.571429 36.571429 0 0 0-36.571429 36.571429v731.428571a36.571429 36.571429 0 0 0 36.571429 36.571429h658.505142a36.571429 36.571429 0 0 0 36.571429-36.571429v-75.410285l73.142857-127.195429v202.605714a109.714286 109.714286 0 0 1-109.714286 109.714286H109.714286A109.714286 109.714286 0 0 1 0 914.285714v-731.428571A109.714286 109.714286 0 0 1 109.714286 73.142857h109.787428z m644.681143 394.166857l101.302857 58.441143-165.668571 286.793143-99.401143 55.222857-1.901714-113.664 165.595428-286.72 0.073143-0.073143zM549.156571 730.331429a36.571429 36.571429 0 1 1 0 73.142857H219.867429a36.571429 36.571429 0 1 1 0-73.142857z m109.714286-219.428572a36.571429 36.571429 0 1 1 0 73.142857H219.867429a36.571429 36.571429 0 1 1 0-73.142857zM768.292571 73.142857a109.714286 109.714286 0 0 1 109.714286 109.714286v228.205714l-73.142857 127.268572V182.857143a36.571429 36.571429 0 0 0-36.571429-36.571429h-109.714285V73.142857z m154.477715 292.937143L1024 424.448l-38.912 67.584-101.376-58.441143 38.985143-67.510857z m-263.899429-74.605714a36.571429 36.571429 0 1 1 0 73.142857H219.867429a36.571429 36.571429 0 1 1 0-73.142857zM329.289143 0v182.857143h-73.142857V0h73.142857z m292.644571 0v182.857143h-73.142857V0h73.142857z m-109.714285 73.142857v73.142857H365.860571V73.142857h146.285715z"></path>
        </svg>
      </i>
    );
  }
};