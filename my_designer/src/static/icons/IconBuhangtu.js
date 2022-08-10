import classNames from "classnames";
export default {
  name: "IconBuhangtu",
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
        <svg class="icon svg-icon" id="iconbuhangtu" viewBox="0 0 1024 1024">
          <path
            d="M992 1024H0V32a32 32 0 1 1 64 0V960h928a32 32 0 1 1 0 64z"
            fill="#5D7092"
          ></path>
          <path
            d="M153.6 614.4m15.36 0l161.28 0q15.36 0 15.36 15.36l0 122.88q0 15.36-15.36 15.36l-161.28 0q-15.36 0-15.36-15.36l0-122.88q0-15.36 15.36-15.36Z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M345.6 358.4m15.36 0l161.28 0q15.36 0 15.36 15.36l0 225.28q0 15.36-15.36 15.36l-161.28 0q-15.36 0-15.36-15.36l0-225.28q0-15.36 15.36-15.36Z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M537.6 256m15.36 0l161.28 0q15.36 0 15.36 15.36l0 71.68q0 15.36-15.36 15.36l-161.28 0q-15.36 0-15.36-15.36l0-71.68q0-15.36 15.36-15.36Z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M729.6 358.4m15.36 0l161.28 0q15.36 0 15.36 15.36l0 430.08q0 15.36-15.36 15.36l-161.28 0q-15.36 0-15.36-15.36l0-430.08q0-15.36 15.36-15.36Z"
            fill="#D0DBF0"
          ></path>
        </svg>
      </i>
    );
  }
};
