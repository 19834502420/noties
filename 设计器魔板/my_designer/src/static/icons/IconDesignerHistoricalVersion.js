import classNames from "classnames";
export default {
  name: "IconDesignerHistoricalVersion",
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
          id="icondesigner-historical-version"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 182.857143a36.571429 36.571429 0 0 0-36.571429 36.571428v292.571429a36.571429 36.571429 0 0 0 10.678858 25.892571L679.716571 731.428571A36.571429 36.571429 0 0 0 731.428571 679.716571l-182.857142-182.857142V219.428571a36.571429 36.571429 0 0 0-36.571429-36.571428z"></path>
          <path d="M512 950.857143c-241.956571 0-438.857143-196.827429-438.857143-438.857143 0-241.956571 196.900571-438.857143 438.857143-438.857143 242.029714 0 438.857143 196.900571 438.857143 438.857143 0 242.029714-196.827429 438.857143-438.857143 438.857143M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0"></path>
        </svg>
      </i>
    );
  }
};
