import classNames from "classnames";
export default {
  name: "IconFanhui",
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
        <svg class="icon svg-icon" id="iconfanhui" viewBox="0 0 1024 1024">
          <path
            d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 70.4a441.6 441.6 0 1 0 0 883.2A441.6 441.6 0 0 0 512 70.4z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M532.032 357.76v7.936h240.896v292.608H532.032v7.872a64 64 0 0 1-105.408 48.768L245.12 560.768a64 64 0 0 1 0-97.536l181.44-154.24a64 64 0 0 1 105.408 48.832z"
            fill="#E4E4E4"
          ></path>
          <path
            d="M532.032 260.928v104.768h240.896v292.608H532.032v104.768a19.2 19.2 0 0 1-31.616 14.592L204.992 526.72a19.2 19.2 0 0 1 0-29.312L500.416 246.4a19.2 19.2 0 0 1 31.616 14.592z m-64 96.896L286.592 512l181.44 154.176V594.304h240.832V429.696H468.032V357.824z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
