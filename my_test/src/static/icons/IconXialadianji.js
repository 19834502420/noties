import classNames from "classnames";
export default {
  name: "IconXialadianji",
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
        <svg class="icon svg-icon" id="iconxialadianji" viewBox="0 0 1024 1024">
          <path d="M941.91616 1024c45.312 0 82.005333-37.717333 82.176-83.968L1024.006827 83.968A82.944 82.944 0 0 0 942.001493 0H81.926827A82.944 82.944 0 0 0 0.006827 83.968v855.893333c0 46.421333 36.693333 84.138667 82.090666 84.138667z m0.170667-83.968H82.182827V83.968h859.818666l0.085334 856.064zM804.614827 658.261333L512.006827 365.738667 219.398827 658.261333H804.70016z"></path>
        </svg>
      </i>
    );
  }
};
