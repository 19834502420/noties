import classNames from "classnames";
export default {
  name: "IconHDesignerMobile",
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
          id="iconh-designer-mobile"
          viewBox="0 0 1024 1024"
        >
          <path d="M870.397096 0H204.799592a55.039794 55.039794 0 0 0-51.199808 51.199808v921.596544a50.55981 50.55981 0 0 0 51.199808 51.199808h671.99748a55.039794 55.039794 0 0 0 51.199808-51.199808V51.199808a63.99976 63.99976 0 0 0-57.599784-51.199808z m-44.799832 921.596544h-575.99784v-262.399016h575.99784v262.399016z m0-364.798632h-575.99784V102.399616h575.99784v454.398296z"></path>
          <path d="M537.598344 838.396856a55.039794 55.039794 0 0 0 51.199808-51.199808 51.199808 51.199808 0 1 0-51.199808 51.199808z"></path>
        </svg>
      </i>
    );
  }
};
