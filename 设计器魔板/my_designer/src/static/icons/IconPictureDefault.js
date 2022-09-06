import classNames from "classnames";
export default {
  name: "IconPictureDefault",
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
          id="iconpicture-default"
          viewBox="0 0 1365 1024"
        >
          <path d="M384 170.666667A128 128 0 1 0 384.170667 426.666667a128 128 0 0 0-0.056889-256.113778z m535.04 76.629333a85.276444 85.276444 0 0 0-130.275556 0.910222L426.666667 682.666667l-110.250667-110.364445a85.333333 85.333333 0 0 0-120.775111 0L85.333333 682.666667V85.333333h1194.666667v583.111111l-360.96-421.148444zM1280 0h-1194.666667A85.333333 85.333333 0 0 0 0 85.333333v853.333334A85.333333 85.333333 0 0 0 85.333333 1024h1194.666667a85.333333 85.333333 0 0 0 85.333333-85.333333v-853.333334c0-45.056-34.702222-81.863111-78.961777-85.105777L1280 0z"></path>
        </svg>
      </i>
    );
  }
};
