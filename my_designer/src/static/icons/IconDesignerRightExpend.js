import classNames from "classnames";
export default {
  name: "IconDesignerRightExpend",
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
          id="icondesigner-right-expend"
          viewBox="0 0 1024 1024"
        >
          <path d="M646.736842 1024l-202.105263-67.584C407.444211 943.966316 377.263158 902.386526 377.263158 863.555368V160.444632C377.263158 121.613474 407.444211 80.033684 444.631579 67.584L646.736842 0v1024zM575.110737 640.808421a21.611789 21.611789 0 0 0-0.700632-26.704842l-90.947368-102.130526 90.893474-102.076632a21.611789 21.611789 0 0 0 0.700631-26.677895c-5.928421-7.599158-15.925895-7.976421-22.285474-0.835368l-103.208421 115.873684a20.668632 20.668632 0 0 0-4.931368 13.716211c0 5.254737 1.805474 10.24 4.985263 13.797052l103.208421 115.873684c6.332632 7.114105 16.330105 6.736842 22.285474-0.862315z"></path>
        </svg>
      </i>
    );
  }
};
