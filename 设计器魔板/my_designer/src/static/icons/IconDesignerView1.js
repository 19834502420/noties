import classNames from "classnames";
export default {
  name: "IconDesignerView1",
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
          id="icondesigner-view1"
          viewBox="0 0 1194 1024"
        >
          <path
            d="M0 518.314667h1194.666667v170.666666H0z"
            fill="#E5E5E5"
          ></path>
          <path
            d="M634.368 912.042667v-67.413334a37.205333 37.205333 0 0 0-74.410667 0v67.413334h-150.186666a37.205333 37.205333 0 0 0 0 74.410666h374.869333a37.205333 37.205333 0 0 0 0-74.410666h-150.186667zM1115.648 6.314667H74.24a74.24 74.24 0 0 0-74.24 74.24v603.562666c0 41.130667 33.28 74.24 74.24 74.24h1041.322667a74.24 74.24 0 0 0 74.24-74.24V80.554667a74.154667 74.154667 0 0 0-74.24-74.24zM74.325333 684.117333V564.48H789.333333c13.653333 0 22.784-16.554667 22.784-30.293333 0-13.653333-9.045333-27.648-22.784-27.648H74.410667V80.554667h1041.322666v426.069333h-175.616c-13.653333 0-26.794667 13.994667-26.794666 27.733333 0 13.653333 13.056 30.293333 26.794666 30.293334h175.616V684.373333H74.410667v-0.170666z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
