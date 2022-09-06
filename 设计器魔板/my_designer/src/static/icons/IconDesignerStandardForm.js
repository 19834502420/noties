import classNames from "classnames";
export default {
  name: "IconDesignerStandardForm",
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
          id="icondesigner-standard-form"
          viewBox="0 0 1024 1024"
        >
          <path d="M1024 938.666667a85.333333 85.333333 0 0 1-85.333333 85.333333H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V85.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h853.333334a85.333333 85.333333 0 0 1 85.333333 85.333333v853.333334zM85.333333 938.666667h213.333334V725.333333H85.333333V938.666667z m554.666667-213.333334h-256V938.666667h256V725.333333z m298.666667 0H725.333333V938.666667H938.666667V725.333333z m0-85.333333v-256H725.333333v256H938.666667z m-853.333334 0h213.333334v-256H85.333333v256z m554.666667-256h-256v256h256v-256z m298.666667-85.333333V85.333333H725.333333v213.333334H938.666667zM298.666667 85.333333H85.333333v213.333334h213.333334V85.333333z m341.333333 0h-256v213.333334h256V85.333333z"></path>
        </svg>
      </i>
    );
  }
};
