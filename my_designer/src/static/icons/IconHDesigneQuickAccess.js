import classNames from "classnames";
export default {
  name: "IconHDesigneQuickAccess",
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
          id="iconh-designe-quick-access"
          viewBox="0 0 1024 1024"
        >
          <path d="M972.8 409.6h-153.6V204.8a55.296 55.296 0 0 0-51.2-51.2H409.6V51.2a55.296 55.296 0 0 0-51.2-51.2H51.2a55.296 55.296 0 0 0-51.2 51.2v256a55.296 55.296 0 0 0 51.2 51.2h51.2v614.4a55.296 55.296 0 0 0 51.2 51.2h614.4a55.296 55.296 0 0 0 51.2-51.2v-153.6h153.6a55.296 55.296 0 0 0 51.2-51.2V460.8a55.296 55.296 0 0 0-51.2-51.2zM102.4 256V102.4h204.8v153.6H102.4z m614.4 665.6H204.8V358.4h153.6a55.296 55.296 0 0 0 51.2-51.2V256h307.2v153.6H460.8a55.296 55.296 0 0 0-51.2 51.2v307.2a55.296 55.296 0 0 0 51.2 51.2h256v102.4z m204.8-204.8h-409.6v-204.8h409.6v204.8z"></path>
        </svg>
      </i>
    );
  }
};
