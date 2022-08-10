import classNames from "classnames";
export default {
  name: "IconExport",
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
        <svg class="icon svg-icon" id="iconexport" viewBox="0 0 1024 1024">
          <path d="M832 74.666667a42.666667 42.666667 0 0 1 40.448 29.141333l1.322667 4.821333 106.368 510.72 1.024 6.229334 0.170666 3.754666v277.333334a42.666667 42.666667 0 0 1-37.674666 42.368L938.666667 949.333333H85.333333a42.666667 42.666667 0 0 1-42.368-37.674666L42.666667 906.666667l0.042666-279.765334 0.554667-4.821333L150.229333 108.629333a42.666667 42.666667 0 0 1 36.778667-33.706666L192 74.666667h640z m-545.621333 597.333333H128v192h768v-192h-158.421333l-29.610667 97.706667a42.666667 42.666667 0 0 1-30.293333 29.013333l-5.461334 0.981333-5.077333 0.298667H356.864a42.666667 42.666667 0 0 1-39.082667-25.514667l-1.749333-4.778666-29.653333-97.706667z m510.933333-512H226.645333l-88.874666 426.666667h180.309333a42.666667 42.666667 0 0 1 39.04 25.514666l1.792 4.778667 29.568 97.706667h246.997333l29.610667-97.706667a42.666667 42.666667 0 0 1 30.336-29.013333l5.461333-0.981334 5.034667-0.298666h180.266667l-88.874667-426.666667z m-291.626667 85.802667l2.474667-0.298667 3.84-0.170667 3.2 0.128 5.376 0.725334 4.736 1.28 4.736 1.877333 4.181333 2.218667 4.437334 3.157333 3.498666 3.114667 128 128 3.541334 4.010666a42.666667 42.666667 0 0 1 0 52.309334l-3.541334 4.010666-4.010666 3.541334a42.666667 42.666667 0 0 1-52.309334 0l-4.010666-3.541334L554.666667 390.997333v153.002667a42.666667 42.666667 0 0 1-85.034667 4.992L469.333333 544V390.997333l-55.168 55.168-4.010666 3.541334A42.666667 42.666667 0 0 1 350.293333 389.845333l3.541334-4.010666 128-128 4.778666-4.138667 4.693334-3.029333 4.864-2.304 4.48-1.493334 5.034666-1.066666z"></path>
        </svg>
      </i>
    );
  }
};
