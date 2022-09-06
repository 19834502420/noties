import classNames from "classnames";
export default {
  name: "IconDesignerLeftCollepse",
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
          id="icondesigner-left-collepse"
          viewBox="0 0 1024 1024"
        >
          <path d="M377.263158 0l202.105263 67.584C616.555789 80.033684 646.736842 121.613474 646.736842 160.444632v703.110736c0 38.831158-30.181053 80.410947-67.368421 92.860632L377.263158 1024V0z m197.847579 356.244211c-5.955368-7.572211-15.952842-7.949474-22.285474-0.808422l-103.208421 115.873685A20.695579 20.695579 0 0 0 444.631579 485.052632c0 5.254737 1.805474 10.24 4.958316 13.743157l103.208421 115.873685c6.332632 7.114105 16.303158 6.736842 22.258526-0.862316a21.611789 21.611789 0 0 0-0.700631-26.677895L483.462737 485.052632l90.947368-102.130527a21.611789 21.611789 0 0 0 0.700632-26.677894z"></path>
        </svg>
      </i>
    );
  }
};
