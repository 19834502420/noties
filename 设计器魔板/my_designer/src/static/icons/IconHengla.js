import classNames from "classnames";
export default {
  name: "IconHengla",
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
        <svg class="icon svg-icon" id="iconhengla" viewBox="0 0 1843 1024">
          <path
            d="M812.6464 102.4h217.9072v191.8976h222.208V30.72L1740.8 409.6l-488.0384 378.88V524.8h-222.208V716.8H812.6464V524.8h-222.208v263.7824L102.4 409.6 590.5408 30.6176l-0.2048 263.68h222.208z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M1314.9184 159.3344L1638.4 413.696l-323.4816 254.464V464.6912H969.3184v201.1136h-95.5392V464.6912H528.1792l0.1024 203.5712L204.8 413.7984l323.4816-254.464-0.1024 203.5712h345.6V161.6896h95.6416l-0.1024 201.216h345.6V159.3344z"
            fill="#0F0F0F"
          ></path>
        </svg>
      </i>
    );
  }
};
