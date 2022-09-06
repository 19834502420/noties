import classNames from "classnames";
export default {
  name: "IconHangzhuanlie",
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
          id="iconhangzhuanlie"
          viewBox="0 0 1102 1024"
        >
          <path d="M93.735385 572.888615c13.627077-151.236923 114.688-266.791385 281.678769-272.226461v83.574154l188.573538-126.03077-188.416-126.345846v83.574154C159.901538 218.978462 20.007385 370.215385 0.551385 564.145231c-2.048 24.891077 19.456 48.049231 46.631384 48.049231a46.473846 46.473846 0 0 0 46.710154-39.148308l-0.157538-0.157539z m394.633846 226.067693v147.062154H75.618462v-146.983385H488.369231m2.205538-75.303385H73.334154a73.491692 73.491692 0 0 0-73.334154 73.097846v151.394462c0 40.172308 33.083077 73.176615 73.334154 73.176615h417.240615a73.491692 73.491692 0 0 0 73.412923-73.176615v-151.394462c0-40.172308-33.083077-73.097846-73.412923-73.097846z m536.654769-648.270769v873.078154H750.276923V75.382154h276.952615M1029.513846 0H748.150154a73.491692 73.491692 0 0 0-73.412923 73.255385v877.48923c0 40.251077 33.083077 73.255385 73.412923 73.255385h281.206154a73.491692 73.491692 0 0 0 73.412923-73.255385V73.255385c0-40.172308-33.083077-73.176615-73.334154-73.176616z"></path>
        </svg>
      </i>
    );
  }
};
