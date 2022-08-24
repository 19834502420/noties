import classNames from "classnames";
export default {
  name: "IconCancle1",
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
        <svg class="icon svg-icon" id="iconcancle-1" viewBox="0 0 1024 1024">
          <path d="M443.733333 725.333333m68.266667 0l0 0q68.266667 0 68.266667 68.266667l0 0q0 68.266667-68.266667 68.266667l0 0q-68.266667 0-68.266667-68.266667l0 0q0-68.266667 68.266667-68.266667Z"></path>
          <path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333s-210.133333 469.333333-469.333333 469.333333S42.666667 771.2 42.666667 512 252.8 42.666667 512 42.666667zM417.450667 357.589333a42.666667 42.666667 0 0 0-56.32 63.914667L451.669333 512l-90.538666 90.496-3.541334 4.053333a42.666667 42.666667 0 0 0 63.914667 56.32L512 572.330667l90.496 90.538666 4.053333 3.541334a42.666667 42.666667 0 0 0 56.32-63.914667L572.330667 512l90.538666-90.496 3.541334-4.053333a42.666667 42.666667 0 0 0-63.914667-56.32L512 451.669333 421.504 361.130667z"></path>
        </svg>
      </i>
    );
  }
};
