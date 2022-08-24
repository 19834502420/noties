import classNames from "classnames";
export default {
  name: "IconDesignerMobile",
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
          id="icondesigner-mobile"
          viewBox="0 0 1024 1024"
        >
          <path d="M202.88 39.296h629.12v128H202.88z" fill="#E5E5E5"></path>
          <path
            d="M192 231.232a32 32 0 0 1-32-32V101.312A83.2 83.2 0 0 1 234.688 18.56L243.2 18.112h537.6a83.2 83.2 0 0 1 82.752 74.688L864 101.312v793.6a83.2 83.2 0 0 1-74.688 82.752L780.8 978.112H243.2a83.2 83.2 0 0 1-82.752-74.688L160 894.912V316.224a32.704 32.704 0 0 1 32-27.008 32 32 0 0 1 31.488 26.24v0.768H224V894.912a19.2 19.2 0 0 0 14.784 18.688L243.2 914.112h537.6a19.2 19.2 0 0 0 18.688-14.784L800 894.912V231.232H192zM780.8 82.112H243.2a19.2 19.2 0 0 0-18.688 14.784L224 101.312v65.92h576V101.312a19.2 19.2 0 0 0-14.784-18.688L780.8 82.112z"
            fill="#4A4A4A"
          ></path>
          <path d="M832 707.008v64H202.88v-64z" fill="#4A4A4A"></path>
          <path
            d="M512 841.984m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
