import classNames from "classnames";
export default {
  name: "IconHDesignerIpad",
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
          id="iconh-designer-ipad"
          viewBox="0 0 1024 1024"
        >
          <path d="M908.792816 0.00384a50.559589 50.559589 0 0 1 51.199584 51.199584v921.592512a50.559589 50.559589 0 0 1-51.199584 51.199584H115.199264a50.559589 50.559589 0 0 1-51.199584-51.199584V51.203424A50.559589 50.559589 0 0 1 115.199264 0.00384h793.593552z m-51.199584 755.193864H166.398848v166.398648h697.594332v-166.398648h-6.399948z m-345.597192 31.99974a51.199584 51.199584 0 1 1 0 102.399168 51.199584 51.199584 0 0 1 0-102.399168z m345.597192-684.794436H166.398848v550.395528h697.594332V102.403008h-6.399948z"></path>
        </svg>
      </i>
    );
  }
};
