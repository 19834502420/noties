import classNames from "classnames";
export default {
  name: "IconToolbarAdd",
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
        <svg class="icon svg-icon" id="icontoolbar-add" viewBox="0 0 1024 1024">
          <path d="M512 0C229.189818 0 0 229.189818 0 512s229.189818 512 512 512 512-229.189818 512-512S794.810182 0 512 0z m311.109818 823.109818a437.713455 437.713455 0 0 1-139.915636 94.301091 435.758545 435.758545 0 0 1-171.194182 34.583273 437.480727 437.480727 0 0 1-171.194182-34.490182 440.459636 440.459636 0 0 1-139.915636-94.301091A437.713455 437.713455 0 0 1 106.589091 683.287273 436.596364 436.596364 0 0 1 72.005818 512c0-59.392 11.636364-117.015273 34.490182-171.194182a440.459636 440.459636 0 0 1 94.301091-139.915636A437.713455 437.713455 0 0 1 340.712727 106.589091 436.596364 436.596364 0 0 1 512 72.005818c59.392 0 117.015273 11.636364 171.194182 34.490182a440.459636 440.459636 0 0 1 139.915636 94.301091A437.713455 437.713455 0 0 1 917.410909 340.712727a436.596364 436.596364 0 0 1 34.583273 171.287273 437.480727 437.480727 0 0 1-128.930909 311.109818z m-91.089454-346.624h-183.528728V293.003636a35.979636 35.979636 0 1 0-72.005818 0v183.482182H291.979636a35.979636 35.979636 0 1 0 0 72.005818h184.506182v182.504728a35.979636 35.979636 0 1 0 72.005818 0v-182.458182h183.528728a35.979636 35.979636 0 1 0 0-72.005818z"></path>
        </svg>
      </i>
    );
  }
};
