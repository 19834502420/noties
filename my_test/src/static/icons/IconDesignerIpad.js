import classNames from "classnames";
export default {
  name: "IconDesignerIpad",
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
          id="icondesigner-ipad"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M128.750933 813.2608h775.3728l-41.096533 147.8656H128.750933z"
            fill="#E5E5E5"
          ></path>
          <path
            d="M802.133333 53.4528a102.4 102.4 0 0 1 102.4 102.4v750.933333a102.4 102.4 0 0 1-102.4 102.4h-614.4a102.4 102.4 0 0 1-102.4-102.4v-750.933333a102.4 102.4 0 0 1 102.4-102.4z m34.133334 772.3008h-307.2v77.687467a13.653333 13.653333 0 0 1-13.653334 13.653333h-40.96a13.653333 13.653333 0 0 1-13.653333-13.653333v-77.687467h-307.2v81.032533a34.133333 34.133333 0 0 0 27.989333 33.5872l6.144 0.546134h614.4a34.133333 34.133333 0 0 0 34.133334-34.133334v-81.032533z m-34.133334-704.034133h-614.4a34.133333 34.133333 0 0 0-34.133333 34.133333v601.634133h682.666667V155.8528a34.133333 34.133333 0 0 0-27.989334-33.5872l-6.144-0.546133z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
