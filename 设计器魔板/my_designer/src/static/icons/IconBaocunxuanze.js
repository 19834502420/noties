import classNames from "classnames";
export default {
  name: "IconBaocunxuanze",
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
          id="iconbaocunxuanze"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M219.428571 658.285714h585.142858v292.571429H219.428571z"
            fill="#D0DBF0"
          ></path>
          <path
            d="M1001.764571 328.192L695.808 22.235429A75.849143 75.849143 0 0 0 642.194286 0H75.849143C33.938286 0 0 33.938286 0 75.849143v872.301714C0 990.061714 33.938286 1024 75.849143 1024h872.301714c41.910857 0 75.849143-33.938286 75.849143-75.849143V381.805714c0-20.114286-8.045714-39.350857-22.235429-53.613714zM246.491429 75.849143h227.547428v132.754286h-227.474286V75.849143z m531.017142 872.301714H246.491429V704.365714h531.017142v243.785143z m170.642286 0h-94.793143V666.404571a37.961143 37.961143 0 0 0-37.961143-37.888H208.603429a37.961143 37.961143 0 0 0-37.961143 37.888v281.746286H75.849143V75.849143h94.793143V246.491429c0 20.992 16.969143 37.961143 37.961143 37.961142H512a37.961143 37.961143 0 0 0 37.961143-37.961142V75.849143h92.16l306.029714 305.956571v566.345143z"
            fill="#1E88E5"
          ></path>
        </svg>
      </i>
    );
  }
};
