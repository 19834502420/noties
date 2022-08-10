import classNames from "classnames";
export default {
  name: "IconTabaseweidushuru",
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
          id="iconTabaseweidushuru"
          viewBox="0 0 1024 1024"
        >
          <path d="M726.4 789.184V960h-56.832v-170.816h56.832z m144.832 0c0 61.632-51.136 112-113.6 112v-56a56.576 56.576 0 0 0 56.768-56z m-289.664-2.752c0 33.536 25.6 58.752 56.768 58.752v56A113.728 113.728 0 0 1 524.8 786.432zM788.864 64l45.44 44.8v190.4l-17.024 16.832 17.024 16.768v123.2h-56.832V355.2l-11.328-11.2H164.16l-11.392 11.2v145.6L164.16 512H408.32v56H164.16l-11.392 11.2v145.6l11.392 11.2H408.32v56H141.44l-45.44-44.8V556.8l17.024-16.832L96 523.2V332.8l17.024-16.832L96 299.2V108.8L141.44 64h647.424zM928 702.4v56h-173.184v-56H928z m-289.664 0v56H465.152v-56h173.184zM294.784 624v56h-56.832V624h56.832z m460.032-61.632c62.464 0 113.536 50.432 113.536 112h-56.768c0-33.6-25.6-58.752-56.768-58.752z m-116.48-2.752v58.752a56.576 56.576 0 0 0-56.768 56H524.8c0-64.384 51.072-114.752 113.536-114.752z m88.064-58.816v170.816h-56.832V500.8h56.832zM294.784 400v56h-56.832V400h56.832zM766.08 120H164.16l-11.392 11.2v145.6l11.392 11.2h601.984l11.328-11.2V131.2l-11.328-11.2z m-471.36 56v56h-56.832V176h56.832z"></path>
        </svg>
      </i>
    );
  }
};
