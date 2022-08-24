import classNames from "classnames";
export default {
  name: "IconDesignerAnalysisPage",
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
          id="icondesigner-analysis-page"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M455.082667 31.744v86.101333a398.250667 398.250667 0 1 0 451.072 451.072h86.101333A483.669333 483.669333 0 1 1 455.082667 31.744zM512 28.416a483.584 483.584 0 0 1 483.498667 474.453333V512H512V28.416z m85.333333 94.549333V426.666667h303.786667a398.762667 398.762667 0 0 0-294.570667-301.568L597.333333 122.88z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M597.333333 122.88V426.666667h303.786667a398.762667 398.762667 0 0 0-294.570667-301.568L597.333333 122.88z"
            fill="#D8D8D8"
          ></path>
        </svg>
      </i>
    );
  }
};
