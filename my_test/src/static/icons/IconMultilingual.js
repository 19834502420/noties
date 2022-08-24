import classNames from "classnames";
export default {
  name: "IconMultilingual",
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
          id="iconmultilingual"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 42.666667c259.2 0 469.333333 210.133333 469.333333 469.333333 0 74.069333-17.152 144.128-47.701333 206.421333l-0.170667 0.426667a42.325333 42.325333 0 0 1-2.346666 4.608l-2.688 5.248A469.290667 469.290667 0 0 1 512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667z m145.92 114.048l0.341333 2.090666 1.493334 8.704c1.834667 10.112 3.882667 13.738667 10.624 18.389334l8.149333 5.12c0.810667 0.426667 1.706667 0.981333 2.816 1.664 37.333333 22.314667 53.589333 50.56 45.653333 101.632-9.045333 57.685333-38.186667 76.672-91.946666 81.792l-22.272 1.877333-6.570667 0.853333a74.112 74.112 0 0 0-5.546667 1.194667 39.68 39.68 0 0 0-17.408 8.704c-2.005333 1.706667-3.242667 5.077333-3.541333 11.989333v6.826667l0.426667 8.874667 1.066666 11.178666 2.389334 20.053334c8.746667 71.424 0.554667 112.64-51.84 141.909333a107.349333 107.349333 0 0 1-58.624 13.653333c-30.293333-1.536-54.058667-11.861333-90.752-34.858666l-32.085334-20.224-23.381333-13.824c-0.298667-0.213333-0.426667-0.298667-0.298667-0.384-2.133333 1.194667-4.181333 4.181333-5.973333 9.941333l-1.749333 6.741333-1.664 8.832-1.493334 11.178667-3.84 39.253333c-4.736 42.538667-11.648 62.378667-33.877333 82.688-23.68 21.589333-53.504 30.208-88.661333 27.690667a383.530667 383.530667 0 0 0 355.157333 174.378667c-15.914667-32.128-19.498667-64.597333-9.216-96.853334 8.106667-25.429333 19.114667-43.818667 34.176-59.605333l3.882667-3.968 10.538666-9.813333c5.930667-5.461333 7.338667-7.253333 8.618667-10.709334l0.213333-1.450666 0.085334-3.498667-0.298667-10.538667c-1.194667-29.141333 0.341333-45.312 10.794667-66.730666 11.690667-23.893333 32.426667-43.434667 63.061333-59.477334 60.8-31.914667 131.072-10.154667 211.498667 56.832A384.128 384.128 0 0 0 657.92 156.714667z m48.085333 490.837333c-15.488 8.106667-22.954667 15.146667-26.026666 21.418667a27.392 27.392 0 0 0-2.432 11.946666v8.362667l0.213333 5.418667c0.938667 22.954667 0.426667 33.28-5.248 48.64-6.826667 18.346667-15.829333 30.037333-30.72 43.776l-6.058667 5.546666c-1.834667 1.706667-3.285333 3.114667-4.522666 4.437334-6.229333 6.485333-10.496 13.653333-14.634667 26.538666-4.437333 13.952 0 31.104 16.682667 52.736a384.682667 384.682667 0 0 0 207.829333-166.4c-64.128-58.453333-109.44-75.904-135.082667-62.421333zM512 128a384 384 0 0 0-368.213333 493.354667l0.085333 0.085333c42.624 17.066667 66.773333 17.066667 76.629333 8.064a5.802667 5.802667 0 0 0 1.194667-1.792l1.28-3.413333 1.237333-5.290667 1.28-7.381333 1.962667-15.402667 1.877333-19.498667c5.717333-63.744 16.170667-95.744 56.448-117.717333 32.768-17.834667 52.736-16.213333 93.653334 7.082667l14.506666 8.618666 16.256 10.197334 8.96 5.717333c29.738667 19.2 45.653333 26.709333 58.325334 27.392a22.186667 22.186667 0 0 0 12.672-2.986667c10.666667-5.973333 13.226667-15.872 9.6-49.493333l-1.621334-13.610667c-8.448-67.413333-5.973333-97.024 29.098667-127.573333 15.701333-13.653333 33.28-22.272 52.821333-27.136 9.130667-2.304 16.298667-3.456 26.88-4.437333l19.285334-1.450667 9.557333-0.554667 3.413333-0.426666c2.133333-0.512 2.56-1.450667 2.816-3.669334l0.64-5.546666 0.64-3.584 0.981334-4.608c0.426667-1.92 0.426667-2.688-0.554667-3.456l-12.8-7.552-2.56-1.578667c-28.330667-17.749333-45.824-40.234667-52.565333-77.696l-4.352-25.728-2.133334-15.104-1.024-9.728A387.157333 387.157333 0 0 0 512 128z"></path>
        </svg>
      </i>
    );
  }
};
