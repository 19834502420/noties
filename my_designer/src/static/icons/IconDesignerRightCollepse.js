import classNames from "classnames";
export default {
  name: "IconDesignerRightCollepse",
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
          id="icondesigner-right-collepse"
          viewBox="0 0 1024 1024"
        >
          <path d="M646.736842 1024l-202.105263-67.584C407.444211 943.966316 377.263158 902.386526 377.263158 863.555368V160.444632C377.263158 121.613474 407.444211 80.033684 444.631579 67.584L646.736842 0v1024zM448.889263 640.808421c5.955368 7.572211 15.952842 7.949474 22.285474 0.808421l103.208421-115.873684A20.695579 20.695579 0 0 0 579.368421 512a20.668632 20.668632 0 0 0-4.958316-13.743158l-103.208421-115.873684c-6.332632-7.114105-16.303158-6.736842-22.258526 0.862316a21.611789 21.611789 0 0 0 0.700631 26.677894L540.537263 512l-90.947368 102.130526a21.611789 21.611789 0 0 0-0.700632 26.677895z"></path>
        </svg>
      </i>
    );
  }
};
