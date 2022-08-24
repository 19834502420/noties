import classNames from "classnames";
export default {
  name: "IconDropdown",
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
        <svg class="icon svg-icon" id="icondropdown" viewBox="0 0 1706 1024">
          <path d="M766.1581 985.965695L32.465074 201.767288A119.950278 119.950278 0 0 1 37.583863 32.506014a119.4384 119.4384 0 0 1 169.090648 5.289414l646.673621 691.036455L1499.6805 38.136681a119.4384 119.4384 0 0 1 168.920022-5.118789c48.116612 45.045339 50.50538 120.80341 5.289415 169.090649L940.196911 986.306947a118.926521 118.926521 0 0 1-174.209437-0.341252z"></path>
        </svg>
      </i>
    );
  }
};
