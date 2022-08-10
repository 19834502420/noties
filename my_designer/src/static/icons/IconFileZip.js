import classNames from "classnames";
export default {
  name: "IconFileZip",
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
        <svg class="icon svg-icon" id="iconfile-zip" viewBox="0 0 1024 1024">
          <path
            d="M0 0v1024h1024V191.707429L768 0H603.209143z"
            fill="#808B7F"
          ></path>
          <path d="M768 192L1024 384V192z" fill="#565A56"></path>
          <path d="M768 192H1024L768 0" fill="#BFCBBE"></path>
          <path
            d="M583.314286 653.165714v213.942857h-142.628572V653.165714h142.628572z m-35.693715 107.008h-71.241142v71.241143h71.241142v-71.241143zM583.314286 332.288H512v71.314286h71.314286v71.314285H512v71.314286h71.314286v71.314286H512v-71.314286h-71.314286v-71.314286H512v-71.314285h-71.314286v-71.314286H512v-71.314286h-71.314286v-71.314285H512v71.314285h71.314286z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
