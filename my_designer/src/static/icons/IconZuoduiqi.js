import classNames from "classnames";
export default {
  name: "IconZuoduiqi",
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
        <svg class="icon svg-icon" id="iconzuoduiqi" viewBox="0 0 1024 1024">
          <path d="M0 0h1024v114.688H0V0z m0 1024v-114.688h1024V1024H0z m0-456.021333V456.021333h1024v111.957334H0z m682.666667-341.333334V341.333333H0V226.645333h682.666667zM682.666667 682.666667v114.688H0V682.666667h682.666667z"></path>
        </svg>
      </i>
    );
  }
};
