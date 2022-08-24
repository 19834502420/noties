import classNames from "classnames";
export default {
  name: "IconDanhanghanshu",
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
          id="icondanhanghanshu"
          viewBox="0 0 1024 1024"
        >
          <path d="M987.428571 0a36.571429 36.571429 0 0 1 36.571429 36.571429v950.857142a36.571429 36.571429 0 0 1-36.571429 36.571429H36.571429a36.571429 36.571429 0 0 1-36.571429-36.571429V36.571429A36.571429 36.571429 0 0 1 36.571429 0h950.857142zM950.857143 73.142857H73.142857v877.714286h877.714286V73.142857zM716.8 473.161143c8.045714 0 14.628571 6.582857 14.628571 14.628571v43.885715a14.628571 14.628571 0 0 1-14.628571 14.628571H307.2a14.628571 14.628571 0 0 1-14.628571-14.628571v-43.885715c0-8.045714 6.582857-14.628571 14.628571-14.628571h409.6z"></path>
        </svg>
      </i>
    );
  }
};
