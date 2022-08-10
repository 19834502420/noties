import classNames from "classnames";
export default {
  name: "IconAdd",
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
        <svg class="icon svg-icon" id="iconadd" viewBox="0 0 1024 1024">
          <path d="M85.333333 469.333333m42.666667 0l768 0q42.666667 0 42.666667 42.666667l0 0q0 42.666667-42.666667 42.666667l-768 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666667Z"></path>
          <path d="M554.666667 85.333333m0 42.666667l0 768q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-768q0-42.666667 42.666667-42.666667l0 0q42.666667 0 42.666667 42.666667Z"></path>
          <path d="M85.333333 469.333333m42.666667 0l768 0q42.666667 0 42.666667 42.666667l0 0q0 42.666667-42.666667 42.666667l-768 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666667Z"></path>
          <path d="M554.666667 85.333333m0 42.666667l0 768q0 42.666667-42.666667 42.666667l0 0q-42.666667 0-42.666667-42.666667l0-768q0-42.666667 42.666667-42.666667l0 0q42.666667 0 42.666667 42.666667Z"></path>
        </svg>
      </i>
    );
  }
};
