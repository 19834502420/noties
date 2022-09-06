import classNames from "classnames";
export default {
  name: "IconShanchuyihang",
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
          id="iconshanchuyihang"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M322.852571 838.290286H93.110857A92.964571 92.964571 0 0 1 0 745.398857V93.622857C0 42.203429 41.691429 0.512 93.110857 0.512h744.740572c51.346286 0 93.037714 41.691429 93.037714 93.110857v210.212572a416.914286 416.914286 0 0 0-232.740572-70.582858 416.914286 416.914286 0 0 0-238.445714 74.459429H74.459429v223.451429h222.573714c-7.314286 24.283429-12.434286 49.225143-15.213714 74.459428H74.459429v139.702857c0 10.24 8.338286 18.578286 18.651428 18.578286h201.216c7.168 25.892571 16.749714 50.834286 28.525714 74.459429z m-248.393142-604.891429H856.502857V93.622857a18.651429 18.651429 0 0 0-18.578286-18.578286H93.110857a18.651429 18.651429 0 0 0-18.651428 18.578286v139.702857z"
            fill="#666666"
          ></path>
          <path
            d="M698.148571 977.993143a325.851429 325.851429 0 1 1 0-651.702857 325.851429 325.851429 0 0 1 0 651.702857z m0-59.245714a266.605714 266.605714 0 1 0 0-533.211429 266.605714 266.605714 0 0 0 0 533.211429z m-127.561142-234.057143a29.622857 29.622857 0 1 1 0-59.245715h242.395428a29.622857 29.622857 0 0 1 0 59.245715H570.514286h0.073143z"
            fill="#0088E9"
          ></path>
        </svg>
      </i>
    );
  }
};
