import classNames from "classnames";
export default {
  name: "IconToolbarUnfold",
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
          id="icontoolbar-unfold"
          viewBox="0 0 1024 1024"
        >
          <path d="M972.8 88.064H51.2c-30.72 0-51.2-17.594182-51.2-44.032S20.48 0 51.2 0h921.6c30.72 0 51.2 17.594182 51.2 44.032s-20.48 44.032-51.2 44.032zM972.8 1024H51.2c-30.72 0-51.2-17.594182-51.2-44.032s20.48-44.032 51.2-44.032h921.6c30.72 0 51.2 17.594182 51.2 44.032s-20.48 44.032-51.2 44.032zM494.917818 556.032H45.009455C18.013091 556.032 0 538.437818 0 512s18.013091-44.032 45.009455-44.032h449.908363c26.996364 0 45.009455 17.594182 45.009455 44.032s-18.013091 44.032-45.009455 44.032z m141.265455-206.242909h328.704a27.927273 27.927273 0 0 1 23.319272 43.240727l-164.677818 251.345455a27.927273 27.927273 0 0 1-46.731636-0.046546l-164.026182-251.345454a27.927273 27.927273 0 0 1 23.412364-43.194182z"></path>
        </svg>
      </i>
    );
  }
};
