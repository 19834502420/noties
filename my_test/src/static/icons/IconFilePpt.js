import classNames from "classnames";
export default {
  name: "IconFilePpt",
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
        <svg class="icon svg-icon" id="iconfile-ppt" viewBox="0 0 1024 1024">
          <path
            d="M0 0v1024h1024V191.707429L768 0H603.209143z"
            fill="#FF7300"
          ></path>
          <path d="M768 192L1024 384V192z" fill="#FC4E1E"></path>
          <path d="M768 192H1024L768 0" fill="#FECD96"></path>
          <path
            d="M545.206857 256H320v63.780571h63.780571v416.548572h96.329143V577.536h63.780572c96.329143 0 160.109714-63.780571 160.109714-160.182857C705.316571 321.097143 640.219429 256 545.206857 256z m0 256.438857h-63.780571V321.097143h63.780571c32.548571 0 80.676571 32.548571 80.676572 96.329143-1.316571 63.780571-49.444571 95.012571-80.676572 95.012571z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
