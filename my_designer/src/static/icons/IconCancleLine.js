import classNames from "classnames";
export default {
  name: "IconCancleLine",
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
        <svg class="icon svg-icon" id="iconcancle-line" viewBox="0 0 1024 1024">
          <path d="M910.646978 1004.544649L511.982934 605.880604 112.977567 1004.544649a66.216459 66.216459 0 0 1-93.522216-93.522216L418.119396 512.017066 19.626012 113.0117A66.216459 66.216459 0 0 1 113.318889 19.489484L511.982934 418.49485 910.9883 19.660145a66.216459 66.216459 0 0 1 93.522216 93.692877L605.846472 512.017066l398.664044 399.005367a66.045798 66.045798 0 1 1-93.692877 93.351555z"></path>
        </svg>
      </i>
    );
  }
};
