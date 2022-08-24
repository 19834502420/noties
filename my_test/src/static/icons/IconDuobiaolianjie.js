import classNames from "classnames";
export default {
  name: "IconDuobiaolianjie",
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
          id="iconduobiaolianjie"
          viewBox="0 0 1024 1024"
        >
          <path d="M711.424 64a19.648 19.648 0 0 1 14.656 6.592l0.128 0.192 197.376 231.872a18.304 18.304 0 0 1 4.416 11.904v524.032a18.368 18.368 0 0 1-5.632 13.184 19.52 19.52 0 0 1-13.568 5.44h-158.912v84.096a18.88 18.88 0 0 1-17.024 18.56L730.624 960H115.2a19.008 19.008 0 0 1-19.072-16.512L96 941.44V243.648c0-9.472 7.296-17.408 16.96-18.56L115.2 225.088h108.288V82.56c0-10.24 8.64-18.624 19.264-18.624h468.672zM242.752 857.216a19.52 19.52 0 0 1-13.568-5.44 18.368 18.368 0 0 1-5.632-13.184V262.272H134.4v660.416h576.896v-65.472zM692.16 101.248H261.952v718.72H889.6l-0.064-492.096H711.36a19.008 19.008 0 0 1-19.072-16.384l-0.128-2.176V101.248z m-20.992 356.928l1.664 1.408 50.688 49.216c40.704 39.488 41.344 103.232 1.472 143.488a108.16 108.16 0 0 1-147.968 4.352l-3.072-2.816-49.472-48a18.24 18.24 0 0 1-0.64-25.536 19.648 19.648 0 0 1 26.176-2.24l1.664 1.408 49.472 48c25.792 24.96 67.392 25.536 93.888 1.28a63.872 63.872 0 0 0 3.84-91.008l-2.56-2.56-50.688-49.216a18.24 18.24 0 0 1 0-26.368 19.648 19.648 0 0 1 25.536-1.408zM548.48 457.856l1.664 1.472 81.6 79.104c7.168 7.04 7.424 18.176 0.704 25.536a19.648 19.648 0 0 1-26.24 2.304l-1.664-1.472L522.944 485.76a18.24 18.24 0 0 1 0-26.368 19.648 19.648 0 0 1 25.536-1.472z m8.832-110.144l3.072 2.816 50.88 49.344c7.232 7.04 7.552 18.24 0.768 25.6a19.648 19.648 0 0 1-26.24 2.24l-1.728-1.408-50.88-49.408a68.8 68.8 0 0 0-93.888-1.28 63.872 63.872 0 0 0-3.84 91.008l2.56 2.56 51.648 50.112c7.168 7.04 7.552 18.24 0.768 25.6a19.648 19.648 0 0 1-26.304 2.24l-1.664-1.472-51.712-50.112a100.352 100.352 0 0 1 0-145.024 108.16 108.16 0 0 1 146.56-2.816z m306.048-57.152L730.56 134.464v156.16l132.8-0.064z"></path>
        </svg>
      </i>
    );
  }
};