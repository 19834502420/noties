import classNames from "classnames";
export default {
  name: "IconMailOpen",
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
        <svg class="icon svg-icon" id="iconmail-open" viewBox="0 0 1024 1024">
          <path d="M531.2 47.232l4.992 2.986667 426.666667 294.058666a42.581333 42.581333 0 0 1 18.346666 31.872L981.333333 384v465.493333c0 46.250667-34.005333 85.461333-78.848 88.917334L896 938.666667H128c-45.824 0-81.92-37.12-85.12-82.645334L42.666667 849.450667l0.085333-468.053334a42.538667 42.538667 0 0 1 14.165333-33.834666l4.224-3.285334 426.666667-294.058666a42.666667 42.666667 0 0 1 43.392-2.986667zM896 462.592l-360.746667 234.496a42.666667 42.666667 0 0 1-41.642666 2.730667l-4.864-2.730667L128 462.592v387.84l0.384 2.688L128 853.333333h768l-0.384-0.213333 0.256-1.834667 0.128-1.834666v-386.858667z m-384-325.461333L158.549333 380.714667 512 610.432l353.408-229.717333L512 137.130667z"></path>
        </svg>
      </i>
    );
  }
};
