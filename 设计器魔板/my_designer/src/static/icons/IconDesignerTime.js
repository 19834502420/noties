import classNames from "classnames";
export default {
  name: "IconDesignerTime",
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
          id="icondesigner-time"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m0 78.762667a433.237333 433.237333 0 1 1 0 866.474666A433.237333 433.237333 0 0 1 512 78.762667z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M465.92 261.376a42.666667 42.666667 0 0 1 41.984 34.986667l0.682667 7.68v256.853333l263.168 0.085333a42.666667 42.666667 0 0 1 41.984 34.986667l0.682666 7.68a42.666667 42.666667 0 0 1-34.986666 41.984l-7.68 0.682667H474.453333a51.2 51.2 0 0 1-50.517333-42.922667l-0.682667-8.277333V304.042667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
