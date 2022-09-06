import classNames from "classnames";
export default {
  name: "IconMore",
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
        <svg class="icon svg-icon" id="iconmore" viewBox="0 0 1024 1024">
          <path d="M512 329.472a51.626667 51.626667 0 0 1-47.317333-30.976 51.498667 51.498667 0 0 1 0.042666-94.549333 51.541333 51.541333 0 0 1 94.592 0.042666 51.541333 51.541333 0 0 1-0.085333 94.592A51.498667 51.498667 0 0 1 512 329.472z m0 260.736a51.626667 51.626667 0 0 1-47.317333-30.976 51.498667 51.498667 0 0 1 0.042666-94.506667 51.541333 51.541333 0 0 1 94.592 0 51.541333 51.541333 0 0 1-0.085333 94.592 51.498667 51.498667 0 0 1-47.232 30.890667z m0 260.736a51.626667 51.626667 0 0 1-47.317333-30.976 51.498667 51.498667 0 0 1 0.042666-94.506667 51.541333 51.541333 0 0 1 94.592 0 51.541333 51.541333 0 0 1-0.085333 94.592 51.498667 51.498667 0 0 1-47.232 30.890667z"></path>
        </svg>
      </i>
    );
  }
};
