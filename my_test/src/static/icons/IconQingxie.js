import classNames from "classnames";
export default {
  name: "IconQingxie",
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
        <svg class="icon svg-icon" id="iconqingxie" viewBox="0 0 1024 1024">
          <path d="M368.64 0H938.666667v126.122667H738.645333l-239.957333 771.754666H655.36V1024H85.333333v-126.122667h200.021334l239.957333-771.754666H368.64z"></path>
        </svg>
      </i>
    );
  }
};
