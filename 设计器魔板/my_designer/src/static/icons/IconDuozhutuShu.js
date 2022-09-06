import classNames from "classnames";
export default {
  name: "IconDuozhutuShu",
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
          id="iconduozhutu-shu"
          viewBox="0 0 1433 1024"
        >
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 0 1 0 64z"
            fill="#5D7092"
          ></path>
          <path
            d="M660.4288 253.5936c12.4928 0 22.6304 10.1376 22.6304 22.6304v566.8864a22.6304 22.6304 0 0 1-22.6304 22.6304h-56.576a22.6304 22.6304 0 0 1-22.6304-22.6304V276.224c0-12.4928 10.1376-22.6304 22.6304-22.6304h56.576zM266.0864 457.8304c12.4928 0 22.6304 10.1376 22.6304 22.6304v362.6496a22.6304 22.6304 0 0 1-22.6304 22.6304H209.5104a22.6304 22.6304 0 0 1-22.6304-22.6304V480.4608c0-12.4928 10.1376-22.6304 22.6304-22.6304h56.576z"
            fill="#5AD8A6"
          ></path>
          <path
            d="M466.944 100.5568c12.544 0 22.6816 10.1376 22.6816 22.6304v719.872a22.6304 22.6304 0 0 1-22.6304 22.6816H410.4192a22.6304 22.6304 0 0 1-22.6304-22.6304V123.2384c0-12.544 10.1376-22.6816 22.6304-22.6816H466.944zM852.48 442.88c12.544 0 22.6816 10.0864 22.6816 22.5792v377.6512a22.6304 22.6304 0 0 1-22.6304 22.6304h-56.576a22.6304 22.6304 0 0 1-22.6304-22.6304V465.408c0-12.4928 10.1376-22.6304 22.6304-22.6304h56.576z"
            fill="#5B8FF8"
          ></path>
        </svg>
      </i>
    );
  }
};
