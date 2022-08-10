import classNames from "classnames";
export default {
  name: "IconScreening",
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
        <svg class="icon svg-icon" id="iconscreening" viewBox="0 0 1024 1024">
          <path d="M850.090667 92.16a46.933333 46.933333 0 0 1 27.52 84.906667l-79.232 57.258666c-143.061333 117.632-222.634667 275.328-222.634667 440.746667 0 66.304 12.629333 131.456 37.546667 193.834667l18.602666 46.421333a46.933333 46.933333 0 0 1-43.562666 64.341333h-264.96c-8.96-0.554667-8.96-0.554667-17.450667-3.328a46.933333 46.933333 0 0 1-26.154667-61.013333l18.56-46.421333c24.917333-62.378667 37.589333-127.530667 37.589334-193.877334 0-165.376-79.573333-323.072-222.634667-440.704L41.514667 175.36a46.933333 46.933333 0 0 1 29.781333-83.2z m-31.744 443.733333c4.010667 0 7.594667 4.437333 9.386666 11.52l10.368 41.557334c12.245333 3.242667 23.893333 8.106667 34.645334 14.293333l36.650666-22.016c6.272-3.669333 11.946667-4.309333 14.762667-1.493333l24.832 24.789333c2.816 2.816 2.176 8.533333-1.536 14.762667l-21.973333 36.650666c6.144 10.794667 11.008 22.4 14.336 34.688l41.472 10.410667c7.082667 1.706667 11.52 5.333333 11.52 9.344v35.072c0 3.968-4.437333 7.552-11.52 9.344l-41.472 10.368a145.834667 145.834667 0 0 1-14.336 34.688l21.973333 36.693333c3.712 6.186667 4.352 11.946667 1.536 14.677334l-24.832 24.832c-2.816 2.816-8.490667 2.218667-14.762667-1.536l-36.650666-22.016a142.506667 142.506667 0 0 1-34.645334 14.336l-10.410666 41.557333c-1.749333 7.04-5.333333 11.52-9.344 11.52h-35.029334c-4.010667 0-7.637333-4.48-9.386666-11.52l-10.368-41.557333a140.928 140.928 0 0 1-34.645334-14.336l-36.693333 22.016c-6.229333 3.754667-11.946667 4.352-14.72 1.536l-24.832-24.832c-2.816-2.773333-2.218667-8.490667 1.536-14.72l22.016-36.693334a143.829333 143.829333 0 0 1-14.336-34.645333l-41.514667-10.368c-7.082667-1.792-11.562667-5.376-11.562666-9.344v-35.072c0-4.010667 4.48-7.637333 11.562666-9.344l41.514667-10.410667c3.285333-12.288 8.106667-23.893333 14.336-34.688l-22.016-36.650666c-3.754667-6.272-4.352-11.946667-1.536-14.762667l24.832-24.789333c2.773333-2.816 8.533333-2.176 14.72 1.493333l36.693333 22.016c10.709333-6.186667 22.357333-11.050667 34.645334-14.293333l10.410666-41.557334c1.706667-7.082667 5.333333-11.52 9.344-11.52zM733.568 177.493333H178.218667l2.986666 2.517334c149.077333 128.298667 234.922667 298.410667 239.786667 478.677333l0.256 16.384c0 77.226667-14.762667 153.173333-43.690667 225.536l2.346667-6.272 151.765333 0.042667-4.522666-11.946667a604.373333 604.373333 0 0 1-36.437334-188.074667l-0.298666-19.285333c0-180.821333 81.408-352.512 228.394666-484.650667l14.762667-12.928z m67.242667 478.506667a71.978667 71.978667 0 1 0-0.085334 143.914667 71.978667 71.978667 0 0 0 0.085334-143.914667z"></path>
        </svg>
      </i>
    );
  }
};