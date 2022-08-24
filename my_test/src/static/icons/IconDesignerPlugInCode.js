import classNames from "classnames";
export default {
  name: "IconDesignerPlugInCode",
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
          id="icondesigner-plug-in-code"
          viewBox="0 0 1536 1024"
        >
          <path
            d="M433.4272 132.096a54.4 54.4 0 0 0-78.848 0L16.9152 469.76a54.4 54.4 0 0 0 0 78.848L354.5792 886.272a56.32 56.32 0 0 0 41.216 14.976 54.4 54.4 0 0 0 41.216-93.824L133.3952 511.104l296.32-296.448a62.976 62.976 0 0 0 3.84-82.56z m1088 337.664L1183.7632 132.096a54.4 54.4 0 0 0-78.848 0 54.4 54.4 0 0 0 0 78.848l296.448 296.32L1104.9152 803.84a54.4 54.4 0 0 0 41.344 93.824 56.32 56.32 0 0 0 41.216-14.976l337.664-337.792c15.104-14.976 15.104-52.48-3.712-75.008z"
            fill="#666666"
          ></path>
        </svg>
      </i>
    );
  }
};
