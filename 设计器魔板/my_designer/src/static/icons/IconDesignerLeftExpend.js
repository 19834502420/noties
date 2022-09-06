import classNames from "classnames";
export default {
  name: "IconDesignerLeftExpend",
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
          id="icondesigner-left-expend"
          viewBox="0 0 1024 1024"
        >
          <path d="M377.263158 0l202.105263 67.584C616.555789 80.033684 646.736842 121.613474 646.736842 160.444632v703.110736c0 38.831158-30.181053 80.410947-67.368421 92.860632L377.263158 1024V0z m71.626105 356.244211a21.611789 21.611789 0 0 0 0.700632 26.704842l90.947368 102.130526-90.893474 102.076632a21.611789 21.611789 0 0 0-0.700631 26.677894c5.928421 7.599158 15.925895 7.976421 22.285474 0.835369l103.208421-115.873685a20.668632 20.668632 0 0 0 4.931368-13.71621 20.695579 20.695579 0 0 0-4.985263-13.797053l-103.208421-115.873684c-6.332632-7.114105-16.330105-6.736842-22.285474 0.862316z"></path>
        </svg>
      </i>
    );
  }
};
