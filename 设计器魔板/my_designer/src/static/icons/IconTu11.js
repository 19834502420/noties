import classNames from "classnames";
export default {
  name: "IconTu11",
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
        <svg class="icon svg-icon" id="icontu11" viewBox="0 0 1024 1024">
          <path
            d="M550.4 473.6V0H512C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512v-38.4H550.4zM512 947.2C271.36 947.2 76.8 752.64 76.8 512 76.8 284.16 250.88 97.28 473.6 79.36v471.04h471.04C926.72 773.12 739.84 947.2 512 947.2z"
            fill="#000000"
          ></path>
          <path
            d="M614.4 0v409.6H1024C1024 184.32 839.68 0 614.4 0z"
            fill="#C4C4C4"
          ></path>
        </svg>
      </i>
    );
  }
};
