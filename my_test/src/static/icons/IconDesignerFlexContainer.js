import classNames from "classnames";
export default {
  name: "IconDesignerFlexContainer",
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
          id="icondesigner-flex-container"
          viewBox="0 0 1109 1024"
        >
          <path d="M256 256h512v512H256z" fill="#DBDBDB"></path>
          <path
            d="M0 0m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M0 238.592m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M0 501.504m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M0 703.744m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M0 938.666667m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M233.301333 0m8.533334 0l68.266666 0q8.533333 0 8.533334 8.533333l0 68.266667q0 8.533333-8.533334 8.533333l-68.266666 0q-8.533333 0-8.533334-8.533333l0-68.266667q0-8.533333 8.533334-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M233.301333 938.666667m8.533334 0l68.266666 0q8.533333 0 8.533334 8.533333l0 68.266667q0 8.533333-8.533334 8.533333l-68.266666 0q-8.533333 0-8.533334-8.533333l0-68.266667q0-8.533333 8.533334-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M469.845333 0m8.533334 0l68.266666 0q8.533333 0 8.533334 8.533333l0 68.266667q0 8.533333-8.533334 8.533333l-68.266666 0q-8.533333 0-8.533334-8.533333l0-68.266667q0-8.533333 8.533334-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M469.845333 938.666667m8.533334 0l68.266666 0q8.533333 0 8.533334 8.533333l0 68.266667q0 8.533333-8.533334 8.533333l-68.266666 0q-8.533333 0-8.533334-8.533333l0-68.266667q0-8.533333 8.533334-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M703.146667 0m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M703.146667 938.666667m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M939.690667 0m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M939.690667 238.592m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M939.690667 501.504m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M939.690667 703.744m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M939.690667 938.666667m8.533333 0l68.266667 0q8.533333 0 8.533333 8.533333l0 68.266667q0 8.533333-8.533333 8.533333l-68.266667 0q-8.533333 0-8.533333-8.533333l0-68.266667q0-8.533333 8.533333-8.533333Z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M713.386667 229.034667a85.333333 85.333333 0 0 1 85.333333 85.333333v395.264a85.333333 85.333333 0 0 1-85.333333 85.333333H310.613333a85.333333 85.333333 0 0 1-85.333333-85.333333V314.368a85.333333 85.333333 0 0 1 85.333333-85.333333h402.773334z m0 85.333333H310.613333v395.264h402.773334V314.368z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};