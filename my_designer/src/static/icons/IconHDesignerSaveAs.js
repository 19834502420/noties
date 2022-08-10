import classNames from "classnames";
export default {
  name: "IconHDesignerSaveAs",
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
          id="iconh-designer-save-as"
          viewBox="0 0 1024 1024"
        >
          <path d="M978.88 102.4H486.208L396.608 12.8c-6.4-12.8-25.6-12.8-38.336-12.8H51.2a55.04 55.04 0 0 0-51.2 51.2v921.28c1.856 27.456 23.68 49.28 51.2 51.2h921.28a55.04 55.04 0 0 0 51.2-51.2V153.536a45.44 45.44 0 0 0-44.8-51.2z m-51.2 818.88H108.736V102.336h236.8L435.008 192c6.4 12.8 25.6 12.8 38.4 12.8h460.608v716.544h-6.4z"></path>
        </svg>
      </i>
    );
  }
};
