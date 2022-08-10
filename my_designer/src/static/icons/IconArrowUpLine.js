import classNames from "classnames";
export default {
  name: "IconArrowUpLine",
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
          id="iconarrow-up-line"
          viewBox="0 0 1706 1024"
        >
          <path d="M766.1581 38.034305L32.465074 822.232712a119.950278 119.950278 0 0 0 5.118789 169.261274 119.4384 119.4384 0 0 0 169.090648-5.289414l646.673621-691.036455 646.332368 690.695202a119.4384 119.4384 0 0 0 168.920022 5.118789 119.950278 119.950278 0 0 0 5.289415-169.090649L940.196911 37.693053A118.926521 118.926521 0 0 0 766.1581 38.034305z"></path>
        </svg>
      </i>
    );
  }
};
