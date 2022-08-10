import classNames from "classnames";
export default {
  name: "IconYouduiqi",
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
        <svg class="icon svg-icon" id="iconyouduiqi" viewBox="0 0 1024 1024">
          <path d="M0 0h1024v114.688H0V0z m341.333333 341.333333V226.645333h682.666667V341.333333H341.333333zM0 567.978667V456.021333h1024v111.957334H0z m341.333333 229.376V682.666667h682.666667v114.688H341.333333zM0 1024v-114.688h1024V1024H0z"></path>
        </svg>
      </i>
    );
  }
};
