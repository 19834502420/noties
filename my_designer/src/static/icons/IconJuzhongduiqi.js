import classNames from "classnames";
export default {
  name: "IconJuzhongduiqi",
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
          id="iconjuzhongduiqi"
          viewBox="0 0 1024 1024"
        >
          <path d="M0 0h1024v114.688H0V0z m226.645333 226.645333h570.709334V341.333333H226.645333V226.645333zM0 567.978667V456.021333h1024v111.957334H0zM0 1024v-114.688h1024V1024H0z m226.645333-341.333333h570.709334v114.688H226.645333V682.666667z"></path>
        </svg>
      </i>
    );
  }
};
