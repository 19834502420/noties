import classNames from "classnames";
export default {
  name: "IconDesignerMoney",
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
          id="icondesigner-money"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 0a512 512 0 1 0 0 1024A512 512 0 0 0 512 0z m0 85.333333a426.666667 426.666667 0 1 1 0 853.333334A426.666667 426.666667 0 0 1 512 85.333333z"></path>
          <path d="M652.8 422.4a42.666667 42.666667 0 0 1 7.68 84.650667l-7.68 0.682666h-281.6a42.666667 42.666667 0 0 1-7.68-84.650666l7.68-0.682667h281.6zM652.8 563.2a42.666667 42.666667 0 0 1 7.68 84.650667l-7.68 0.682666h-281.6a42.666667 42.666667 0 0 1-7.68-84.650666l7.68-0.682667h281.6z"></path>
          <path d="M512.170667 422.4a42.666667 42.666667 0 0 1 41.984 34.986667l0.682666 7.68v281.6a42.666667 42.666667 0 0 1-84.650666 7.68l-0.682667-7.68v-281.6a42.666667 42.666667 0 0 1 42.666667-42.666667z"></path>
          <path d="M340.992 270.592a42.666667 42.666667 0 0 1 54.442667-4.864l5.973333 4.864L512 381.269333l110.592-110.677333a42.666667 42.666667 0 0 1 54.442667-4.864l5.973333 4.864a42.666667 42.666667 0 0 1 4.864 54.442667l-4.864 5.973333-140.8 140.8a42.666667 42.666667 0 0 1-54.442667 4.864l-5.973333-4.864-140.8-140.8a42.666667 42.666667 0 0 1 0-60.416z"></path>
        </svg>
      </i>
    );
  }
};
