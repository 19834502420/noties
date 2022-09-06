import classNames from "classnames";
export default {
  name: "IconHDesigneNotice",
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
          id="iconh-designe-notice"
          viewBox="0 0 1024 1024"
        >
          <path d="M972.806144 0a55.296 55.296 0 0 0-51.2 51.2c0 102.4-261.12 204.8-409.6 204.8H230.406144A229.376 229.376 0 0 0 0.006144 486.4a225.792 225.792 0 0 0 168.96 220.16l128 256A102.4 102.4 0 0 0 389.126144 1024H460.806144a102.4 102.4 0 0 0 102.4-102.4v-199.68c153.6 15.36 358.4 107.52 358.4 199.68a51.2 51.2 0 0 0 102.4 0V51.2a55.296 55.296 0 0 0-51.2-51.2zM460.806144 921.6H394.246144l-107.52-204.8H460.806144v204.8z m0-307.2H230.406144a128 128 0 1 1 0-256H460.806144v256z m460.8 133.12a830.976 830.976 0 0 0-358.4-133.12V353.28a768 768 0 0 0 358.4-133.12v527.36z"></path>
        </svg>
      </i>
    );
  }
};
