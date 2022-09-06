import classNames from "classnames";
export default {
  name: "IconToolbarRepeal",
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
          id="icontoolbar-repeal"
          viewBox="0 0 1126 1024"
        >
          <path d="M425.450727 617.287536H975.311234c27.646618 0 49.712714 22.629269 49.712715 50.99265v202.588271c0 28.312184-22.014899 50.99265-49.661517 50.99265h-294.743663a50.378281 50.378281 0 0 0-49.763912 51.043848c0 28.158592 22.270886 50.99265 49.763912 50.99265h294.692465c82.683866 0 149.189341-68.39978 149.189341-153.029148v-202.588271c0-84.782961-66.659067-153.029149-149.189341-153.029149H427.80581l125.280136-128.505574a51.19744 51.19744 0 0 0-0.665567-71.471627c-18.840658-19.301435-50.583071-20.222989-69.628519-0.665566l-207.349632 212.674166a52.579771 52.579771 0 0 0-11.212239 12.79936 51.40223 51.40223 0 0 0 11.673016 68.143793l206.940053 212.264586a48.125594 48.125594 0 0 0 69.628518-0.716764c18.891855-19.301435 19.762212-51.914204 0.716765-71.420429l-127.788811-131.065446zM1005.056947 78.844058H122.873856c-27.032248-1.075146-46.077696 16.741563-46.077696 39.422029v787.570221c0.255987 20.581371 20.478976 39.370831 46.077696 39.370832h220.40498a38.910054 38.910054 0 0 1 38.39808 39.370831 38.910054 38.910054 0 0 1-38.39808 39.370832H122.873856C56.675566 1023.948803 0.921554 972.085796 0 906.39948V118.266087C0 49.815109 56.317184-2.764662 124.40978 0.153592H1003.469827A118.061297 118.061297 0 0 1 1126.343683 117.754112v159.736013a38.910054 38.910054 0 0 1-38.39808 39.422029 38.910054 38.910054 0 0 1-38.39808-39.422029V118.266087c-0.255987-22.578071-19.455027-40.497175-44.439378-39.422029z"></path>
        </svg>
      </i>
    );
  }
};
