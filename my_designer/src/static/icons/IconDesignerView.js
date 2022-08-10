import classNames from "classnames";
export default {
  name: "IconDesignerView",
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
          id="icondesigner-view"
          viewBox="0 0 1194 1024"
        >
          <path
            d="M0 536.746667h1194.666667v170.666666H0z"
            fill="#E5E5E5"
          ></path>
          <path
            d="M634.368 930.56v-67.413333a37.205333 37.205333 0 0 0-74.410667 0v67.413333h-150.186666a37.205333 37.205333 0 0 0 0 74.410667h374.869333a37.205333 37.205333 0 0 0 0-74.410667h-150.186667zM1115.648 24.832H74.24a74.24 74.24 0 0 0-74.24 74.24v603.648c0 40.96 33.28 74.24 74.24 74.24h1041.322667a74.24 74.24 0 0 0 74.24-74.24V98.986667a74.154667 74.154667 0 0 0-74.24-74.24zM74.325333 702.72V583.082667H789.333333c13.653333 0 22.784-16.64 22.784-30.378667 0-13.653333-9.045333-27.648-22.784-27.648H74.410667V98.986667h1041.322666v426.069333h-175.616c-13.653333 0-26.794667 13.994667-26.794666 27.733333s13.056 30.293333 26.794666 30.293334h175.616v119.637333H74.410667v-0.085333z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
