import classNames from "classnames";
export default {
  name: "IconDesignerReturn",
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
          id="icondesigner-return"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 70.436571a441.563429 441.563429 0 1 0 0 883.126858A441.563429 441.563429 0 0 0 512 70.363429z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M532.041143 357.741714V365.714286h240.859428v292.571428H532.041143v7.899429a64 64 0 0 1-105.398857 48.786286L245.028571 560.786286a64 64 0 0 1 0-97.572572l181.394286-154.258285a64 64 0 0 1 105.472 48.859428z"
            fill="#E4E4E4"
          ></path>
          <path
            d="M532.041143 260.900571V365.714286h240.859428v292.571428H532.041143v104.813715a19.236571 19.236571 0 0 1-31.597714 14.628571L204.946286 526.628571a19.163429 19.163429 0 0 1 0-29.257142l295.497143-251.026286a19.163429 19.163429 0 0 1 31.597714 14.628571v-0.146285z m-64 96.914286L286.646857 512l181.394286 154.185143v-71.899429H708.754286v-164.571428H468.114286v-71.899429z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
