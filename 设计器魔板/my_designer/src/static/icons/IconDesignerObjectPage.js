import classNames from "classnames";
export default {
  name: "IconDesignerObjectPage",
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
          id="icondesigner-object-page"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M116.650667 192.853333h183.210666v613.717334h511.402667V1024h-523.946667a170.666667 170.666667 0 0 1-170.666666-170.666667V192.853333z"
            fill="#D8D8D8"
          ></path>
          <path
            d="M157.269333 191.744v736.256h656.213334V1024H205.312A144.042667 144.042667 0 0 1 61.44 886.698667l-0.170667-6.741334V191.744h96zM866.730667 0c52.992 0 96 43.008 96 96V773.12c0 52.992-43.008 96-96 96H221.013333v-773.12C221.013333 43.008 264.021333 0 317.013333 0h549.717334z m0 96H317.013333V773.12h549.717334V96zM701.44 191.744v96H413.354667V191.744H701.44z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
