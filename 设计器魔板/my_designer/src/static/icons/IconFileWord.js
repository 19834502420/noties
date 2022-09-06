import classNames from "classnames";
export default {
  name: "IconFileWord",
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
        <svg class="icon svg-icon" id="iconfile-word" viewBox="0 0 1024 1024">
          <path
            d="M0 0v1024h1024V191.707429L768 0H603.209143z"
            fill="#3980FC"
          ></path>
          <path d="M768 192L1024 384V192z" fill="#2054B2"></path>
          <path d="M768 192H1024L768 0" fill="#B9D3FF"></path>
          <path
            d="M698.806857 315.099429H597.796571v53.174857h53.979429l-51.2 196.973714-53.979429-250.148571h-69.193142l-53.979429 250.148571-65.024-250.148571H256l120.393143 393.801142h67.803428L512 472.649143l67.803429 236.251428h67.803428L768 315.099429z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
