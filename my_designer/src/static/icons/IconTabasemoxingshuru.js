import classNames from "classnames";
export default {
  name: "IconTabasemoxingshuru",
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
          id="iconTabasemoxingshuru"
          viewBox="0 0 1024 1024"
        >
          <path d="M895.36 542.784c43.008 41.984 43.008 109.248 2.88 151.232L628.48 960h-160.64v-151.232l269.632-265.984a114.56 114.56 0 0 1 157.824 0zM726.08 635.2l-200.832 196.032v72.768h74.624l200.832-196.032-74.624-72.768zM796.032 64l45.888 44.8v190.4l-17.216 16.832 17.28 16.768v123.2h-57.408V355.2l-11.52-11.2H164.864l-11.52 11.2v145.6l11.52 11.2H411.52v56H164.864l-11.52 11.2v145.6l11.52 11.2H411.52v56H141.888l-45.888-44.8V556.8l17.216-16.832L96 523.2V332.8l17.216-16.832L96 299.2V108.8L141.888 64h654.08z m-499.2 560v56H239.36V624h57.408z m483.776-41.984l-14.336 14.016 74.56 72.768 14.336-14.016c20.096-19.584 20.096-50.368 0-72.768a54.656 54.656 0 0 0-74.56 0zM296.768 400v56h-57.344V400h57.408zM773.12 120H164.864l-11.52 11.2v145.6l11.52 11.2h608.192l11.52-11.2V131.2l-11.52-11.2z m-476.224 56v56H239.36V176h57.408z"></path>
        </svg>
      </i>
    );
  }
};
