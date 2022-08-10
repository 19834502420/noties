import classNames from "classnames";
export default {
  name: "IconTu7",
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
        <svg class="icon svg-icon" id="icontu7" viewBox="0 0 1024 1024">
          <path
            d="M352 46.506667c191.829333 0 351.744 164.352 351.744 361.642666 0 197.12-159.914667 361.557333-351.744 361.557334C160 769.706667 0 605.269333 0 408.149333 0 210.773333 160 46.506667 352 46.506667z m0 65.706666a282.88 282.88 0 0 0-204.032 86.186667 298.752 298.752 0 0 0-83.882667 209.834667c-0.170667 78.848 30.037333 154.453333 83.797334 209.408A282.794667 282.794667 0 0 0 352 704a282.794667 282.794667 0 0 0 203.946667-86.357333c53.76-54.954667 84.053333-130.56 83.882666-209.408a298.666667 298.666667 0 0 0-83.968-209.664 282.88 282.88 0 0 0-203.946666-86.357334zM831.744 572.416c108.8 0 192 85.504 192 197.290667 0 111.786667-83.2 197.12-192 197.12s-192-85.418667-192-197.12c0-111.786667 83.285333-197.290667 192-197.290667z m0 65.706667c-70.570667 0.341333-127.744 59.050667-128 131.584 0 72.277333 57.685333 131.413333 128 131.413333 70.4 0 128-59.136 128-131.413333-0.170667-72.533333-57.344-131.242667-128-131.498667z"
            fill="#000000"
          ></path>
          <path
            d="M352 177.92c121.514667 0 223.744 105.301333 223.744 230.229333 0 124.842667-102.229333 230.144-223.744 230.144C230.314667 638.293333 128 532.992 128 408.149333c0-124.928 102.4-230.229333 224-230.229333z m0 65.792c-89.685333 0-160.085333 72.362667-160.085333 164.437333 0 91.989333 70.4 164.266667 160.085333 164.266667 89.514667 0 159.829333-72.192 159.829333-164.266667 0-92.074667-70.314667-164.437333-159.829333-164.437333z"
            fill="#000000"
          ></path>
          <path
            d="M256 408.234667c0-54.613333 42.837333-98.645333 95.914667-98.730667 52.992 0 96 44.117333 96 98.56 0 35.242667-18.261333 67.84-47.872 85.418667a93.610667 93.610667 0 0 1-96.085334 0 99.157333 99.157333 0 0 1-47.957333-85.333334zM767.744 309.504c2.218667-70.997333 58.88-127.402667 128-127.402667s125.781333 56.32 128 127.402667a132.266667 132.266667 0 0 1-62.890667 117.333333 125.098667 125.098667 0 0 1-130.218666 0 132.437333 132.437333 0 0 1-62.890667-117.333333zM767.744 769.792a64.853333 64.853333 0 0 1 64-65.706667 64.853333 64.853333 0 0 1 64 65.706667 68.096 68.096 0 0 1-19.029333 46.762667 61.696 61.696 0 0 1-44.970667 18.944 61.696 61.696 0 0 1-44.885333-18.944 68.096 68.096 0 0 1-19.114667-46.762667z"
            fill="#C4C4C4"
          ></path>
        </svg>
      </i>
    );
  }
};