import classNames from "classnames";
export default {
  name: "IconZhuzhuangtuShu",
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
          id="iconzhuzhuangtu-shu"
          viewBox="0 0 1344 1024"
        >
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 0 1 0 64z"
            fill="#5D7092"
          ></path>
          <path
            d="M660.4288 355.9936c12.4928 0 22.6304 10.1376 22.6304 22.6304v464.4864a22.6304 22.6304 0 0 1-22.6304 22.6304h-56.576a22.6304 22.6304 0 0 1-22.6304-22.6304V378.624c0-12.4928 10.1376-22.6304 22.6304-22.6304h56.576zM266.0864 457.8304c12.4928 0 22.6304 10.1376 22.6304 22.6304v362.6496a22.6304 22.6304 0 0 1-22.6304 22.6304H209.5104a22.6304 22.6304 0 0 1-22.6304-22.6304V480.4608c0-12.4928 10.1376-22.6304 22.6304-22.6304h56.576z m200.9088-203.6736c12.4928 0 22.6304 10.1376 22.6304 22.6304v566.272a22.6304 22.6304 0 0 1-22.6304 22.6816H410.4192a22.6304 22.6304 0 0 1-22.6304-22.6304V276.8384c0-12.544 10.1376-22.6816 22.6304-22.6816H466.944z m385.536-169.728c12.4928 0 22.6304 10.1376 22.6304 22.6304v736.0512a22.6304 22.6304 0 0 1-22.6304 22.6304h-56.576a22.6304 22.6304 0 0 1-22.6304-22.6304V107.008c0-12.4928 10.1376-22.6304 22.6304-22.6304h56.576z"
            fill="#5B8FF8"
          ></path>
        </svg>
      </i>
    );
  }
};
