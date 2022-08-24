import classNames from "classnames";
export default {
  name: "IconHDesignePreservation",
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
          id="iconh-designe-preservation"
          viewBox="0 0 1024 1024"
        >
          <path d="M1023.976321 320.01628a58.238653 58.238653 0 0 0-19.199556-44.798964L767.98224 25.623087l-6.399852-6.399852a72.958313 72.958313 0 0 0-51.198816-19.199556h-639.9852A81.918106 81.918106 0 0 0 0 76.821903v876.779725A81.918106 81.918106 0 0 0 76.798224 1024h876.779725a81.918106 81.918106 0 0 0 70.398372-76.798224V320.01628zM287.99334 102.421312h255.99408v307.192896h-255.99408V102.421312z m633.585348 819.181056H102.397632V102.421312h83.198076v339.192156A81.918106 81.918106 0 0 0 262.393932 512.01184H575.98668a81.918106 81.918106 0 0 0 70.398372-76.798224V102.421312h51.198816l217.594968 236.794524v582.386532h6.399852z"></path>
        </svg>
      </i>
    );
  }
};
