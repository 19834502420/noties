import classNames from "classnames";
export default {
  name: "IconHDesignerDesktop",
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
          id="iconh-designer-desktop"
          viewBox="0 0 1024 1024"
        >
          <path d="M972.8 0H51.2a55.04 55.04 0 0 0-51.2 51.2v921.6a55.04 55.04 0 0 0 51.2 51.2h921.6a55.04 55.04 0 0 0 51.2-51.2V51.2a55.04 55.04 0 0 0-51.2-51.2zM307.2 102.4h102.4v102.4H307.2V102.4z m-204.8 0h102.4v102.4H102.4V102.4z m819.2 819.2H102.4V307.2h819.2v614.4z m0-716.8H512V102.4h409.6v102.4z"></path>
        </svg>
      </i>
    );
  }
};
