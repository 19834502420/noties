import classNames from "classnames";
export default {
  name: "IconQuery",
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
        <svg class="icon svg-icon" id="iconquery" viewBox="0 0 1024 1024">
          <path d="M479.817143 46.226286a453.485714 453.485714 0 0 1 371.858286 713.216l130.925714 130.925714a51.2 51.2 0 0 1-66.048 77.824l-6.363429-5.412571-126.537143-126.390858A453.485714 453.485714 0 1 1 479.817143 46.226286z m0 102.4a351.085714 351.085714 0 1 0 0 702.171428 351.085714 351.085714 0 0 0 0-702.171428z"></path>
        </svg>
      </i>
    );
  }
};
