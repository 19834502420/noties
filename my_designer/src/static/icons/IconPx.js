import classNames from "classnames";
export default {
  name: "IconPx",
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
        <svg class="icon svg-icon" id="iconPX" viewBox="0 0 1024 1024">
          <path
            d="M256 731.428571a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-36.571429 36.571429h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571429v-219.428571a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571z m0-365.714285a36.571429 36.571429 0 0 1 36.571429 36.571428v219.428572a36.571429 36.571429 0 0 1-36.571429 36.571428h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571428v-219.428572A36.571429 36.571429 0 0 1 36.571429 365.714286h219.428571z m731.428571-365.714286a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-36.571429 36.571429H36.571429a36.571429 36.571429 0 0 1-36.571429-36.571429v-219.428571A36.571429 36.571429 0 0 1 36.571429 0h950.857142z"
            fill="#08BF6C"
          ></path>
          <path
            d="M621.714286 731.428571a36.571429 36.571429 0 0 1 36.571428 36.571429v219.428571a36.571429 36.571429 0 0 1-36.571428 36.571429h-219.428572a36.571429 36.571429 0 0 1-36.571428-36.571429v-219.428571a36.571429 36.571429 0 0 1 36.571428-36.571429h219.428572z m365.714285 0a36.571429 36.571429 0 0 1 36.571429 36.571429v219.428571a36.571429 36.571429 0 0 1-36.571429 36.571429h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571429v-219.428571a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571z m-365.714285-365.714285a36.571429 36.571429 0 0 1 36.571428 36.571428v219.428572a36.571429 36.571429 0 0 1-36.571428 36.571428h-219.428572a36.571429 36.571429 0 0 1-36.571428-36.571428v-219.428572a36.571429 36.571429 0 0 1 36.571428-36.571428h219.428572z m365.714285 0a36.571429 36.571429 0 0 1 36.571429 36.571428v219.428572a36.571429 36.571429 0 0 1-36.571429 36.571428h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571428v-219.428572a36.571429 36.571429 0 0 1 36.571429-36.571428h219.428571z"
            fill="#63DDA6"
          ></path>
        </svg>
      </i>
    );
  }
};