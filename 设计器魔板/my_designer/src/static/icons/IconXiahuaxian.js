import classNames from "classnames";
export default {
  name: "IconXiahuaxian",
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
        <svg class="icon svg-icon" id="iconxiahuaxian" viewBox="0 0 1024 1024">
          <path d="M85.333333 909.312h853.333334V1024H85.333333v-114.688z m426.666667-111.957333c-101.205333 0-187.562667-33.28-259.157333-100.010667C181.248 630.613333 145.493333 550.229333 145.493333 456.021333V0h151.722667v456.021333c0 55.125333 20.992 101.717333 62.976 139.946667 42.069333 38.229333 92.586667 57.344 151.808 57.344s109.738667-19.114667 151.808-57.344c41.984-38.229333 62.976-84.821333 62.976-139.946667V0h151.722667v456.021333c0 94.208-35.84 174.677333-107.349334 241.322667C699.562667 763.989333 613.205333 797.354667 512 797.354667z"></path>
        </svg>
      </i>
    );
  }
};
