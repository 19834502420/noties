import classNames from "classnames";
export default {
  name: "IconMianjitu",
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
        <svg class="icon svg-icon" id="iconmianjitu" viewBox="0 0 1365 1024">
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 0 1 0 64z"
            fill="#5D7093"
          ></path>
          <path
            d="M921.7536 235.8272v594.3808c0 19.2-9.7792 36.9664-25.4976 39.7824l-4.4544 0.4096H192c-18.2784 0-35.1744-16.128-37.888-35.0208l-0.3584-5.1712V479.9488c0-9.0112 6.144-17.92 13.056-24.7296l3.584-3.1744 194.56-139.4688c8.704-6.144 19.968-8.192 30.5152-3.9936l4.4032 2.2528 221.184 125.4912 245.76-224.8704a29.3376 29.3376 0 0 1 34.9696-8.704c11.6224 4.5568 18.176 15.8208 19.6608 27.904l0.3072 5.1712v594.3808V235.8272z"
            fill="#87ADFA"
          ></path>
        </svg>
      </i>
    );
  }
};
