import classNames from "classnames";
export default {
  name: "IconDesignerDesktop",
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
          id="icondesigner-desktop"
          viewBox="0 0 1181 1024"
        >
          <path
            d="M0 61.676308h1102.769231v222.286769H0z"
            fill="#E5E5E5"
          ></path>
          <path
            d="M1108.125538 61.676308v945.230769H0v-945.230769h1108.125538z m-78.76923 78.76923H78.769231v787.692308h950.587077v-787.692308z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M151.630769 741.218462h799.428923v78.76923H151.630769z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M1108.125538 61.676308H0v166.675692a118.153846 118.153846 0 0 0 118.153846 118.153846h871.817846a118.153846 118.153846 0 0 0 118.153846-118.153846V61.676308zM78.769231 140.445538h950.587077v87.906462a39.384615 39.384615 0 0 1-39.384616 39.384615H118.153846l-7.089231-0.630153A39.384615 39.384615 0 0 1 78.769231 228.430769V140.445538z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
