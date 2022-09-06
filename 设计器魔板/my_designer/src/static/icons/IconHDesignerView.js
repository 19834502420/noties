import classNames from "classnames";
export default {
  name: "IconHDesignerView",
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
          id="iconh-designer-view"
          viewBox="0 0 1024 1024"
        >
          <path d="M966.784 6.4H50.88A54.72 54.72 0 0 0 0 57.152v712.32a54.72 54.72 0 0 0 50.88 50.944H305.28c0 40.32-10.944 79.936-31.808 114.496a63.616 63.616 0 0 0-12.672 57.216 47.68 47.68 0 0 0 44.48 31.808h407.04a47.68 47.68 0 0 0 44.544-31.808 63.616 63.616 0 0 0-6.4-57.216 233.408 233.408 0 0 1-31.744-120.896h254.4a54.72 54.72 0 0 0 50.88-50.88V50.88a70.592 70.592 0 0 0-57.216-44.544zM387.968 922.24c8.128-33.6 14.464-67.52 19.072-101.76h209.92c1.408 34.624 7.872 68.928 19.072 101.76H387.968z m527.936-203.52H101.76V616.96h814.08v101.76z m0-203.52H101.76V108.16h814.08v407.04z"></path>
        </svg>
      </i>
    );
  }
};
