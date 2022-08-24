import classNames from "classnames";
export default {
  name: "IconXialamoren",
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
        <svg class="icon svg-icon" id="iconxialamoren" viewBox="0 0 1024 1024">
          <path d="M941.91616 0c45.312 0 82.005333 37.717333 82.176 83.968L1024.006827 940.032c0 46.506667-36.693333 83.968-82.005334 83.968H81.926827A82.944 82.944 0 0 1 0.006827 940.032V84.138667C0.006827 37.632 36.70016 0 82.182827 0z m0.170667 83.968H82.182827v856.064h859.818666L942.086827 83.968zM804.614827 365.738667L512.006827 658.261333 219.398827 365.738667H804.70016z"></path>
        </svg>
      </i>
    );
  }
};
