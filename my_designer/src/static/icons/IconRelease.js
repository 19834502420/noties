import classNames from "classnames";
export default {
  name: "IconRelease",
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
        <svg class="icon svg-icon" id="iconrelease" viewBox="0 0 1024 1024">
          <path d="M882.261333 89.6a38.826667 38.826667 0 0 1 56.149334 38.741333l-84.821334 731.221334a38.826667 38.826667 0 0 1-56.149333 30.421333l-192.512-97.792-140.245333 135.552a38.698667 38.698667 0 0 1-27.264 10.922667h-0.853334a38.826667 38.826667 0 0 1-38.570666-34.261334l-0.256-4.522666L397.653333 686.933333l-291.157333-147.84a38.826667 38.826667 0 0 1-4.693333-66.346666l4.693333-2.816zM475.306667 726.4v83.2l56.405333-54.528-56.405333-28.672z m371.925333-481.578667l-352.128 404.608 287.317333 145.92 64.810667-550.528z m-102.144-0.768L209.749333 504.448l214.016 108.714667 321.322667-369.152z"></path>
        </svg>
      </i>
    );
  }
};
