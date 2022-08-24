import classNames from "classnames";
export default {
  name: "IconDesignerPersonnel",
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
          id="icondesigner-personnel"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M794.794667 603.648c127.061333 90.794667 182.442667 205.738667 166.144 344.917333a85.333333 85.333333 0 0 1-84.736 75.434667H129.024a85.333333 85.333333 0 0 1-81.237333-111.36c47.189333-147.456 108.714667-250.453333 184.576-308.906667 140.373333-108.373333 338.517333-160.085333 562.432 0z m-510.293334 67.584c-56.064 43.264-105.984 123.392-146.773333 241.493333L128.938667 938.666667h747.178666l1.621334-17.664c5.802667-93.098667-30.976-169.216-116.053334-235.52l-16.554666-12.373334c-167.424-119.637333-321.706667-109.226667-460.8-1.877333zM507.562667 0a224 224 0 1 1 0 448 224 224 0 0 1 0-448z m0 85.333333a138.666667 138.666667 0 1 0 0 277.333334 138.666667 138.666667 0 0 0 0-277.333334z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
