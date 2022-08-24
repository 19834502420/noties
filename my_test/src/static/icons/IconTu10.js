import classNames from "classnames";
export default {
  name: "IconTu10",
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
        <svg class="icon svg-icon" id="icontu10" viewBox="0 0 1024 1024">
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 1 1 0 64z"
            fill="#000000"
          ></path>
          <path
            d="M153.6 614.4m25.6 0l140.8 0q25.6 0 25.6 25.6l0 102.4q0 25.6-25.6 25.6l-140.8 0q-25.6 0-25.6-25.6l0-102.4q0-25.6 25.6-25.6Z"
            fill="#C4C4C4"
          ></path>
          <path
            d="M345.6 358.4m25.6 0l140.8 0q25.6 0 25.6 25.6l0 204.8q0 25.6-25.6 25.6l-140.8 0q-25.6 0-25.6-25.6l0-204.8q0-25.6 25.6-25.6Z"
            fill="#C4C4C4"
          ></path>
          <path
            d="M537.6 256m25.6 0l140.8 0q25.6 0 25.6 25.6l0 51.2q0 25.6-25.6 25.6l-140.8 0q-25.6 0-25.6-25.6l0-51.2q0-25.6 25.6-25.6Z"
            fill="#C4C4C4"
          ></path>
          <path
            d="M729.6 358.4m25.6 0l140.8 0q25.6 0 25.6 25.6l0 409.6q0 25.6-25.6 25.6l-140.8 0q-25.6 0-25.6-25.6l0-409.6q0-25.6 25.6-25.6Z"
            fill="#959595"
          ></path>
        </svg>
      </i>
    );
  }
};
