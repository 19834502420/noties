import classNames from "classnames";
export default {
  name: "IconEdit",
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
        <svg class="icon svg-icon" id="iconedit" viewBox="0 0 1024 1024">
          <path d="M46.976 874.026667m28.373333 0l869.76 0q28.373333 0 28.373334 28.373333l0 30.506667q0 28.373333-28.373334 28.373333l-869.76 0q-28.373333 0-28.373333-28.373333l0-30.506667q0-28.373333 28.373333-28.373333Z"></path>
          <path d="M803.669333 136.533333c43.008 43.008 43.306667 112.469333 0.682667 155.136L379.989333 710.186667l-188.16 82.432a57.386667 57.386667 0 0 1-75.52-75.52l82.432-188.16 424.362667-418.517334c42.666667-42.666667 112.085333-42.325333 155.136 0.682667z m-166.698666 196.437334l-56.746667-56.746667-307.712 303.36-44.288 100.992 101.034667-44.202667 307.712-303.36z m104.96-134.784l-25.386667-25.386667a22.058667 22.058667 0 0 0-31.189333-0.128l-42.965334 42.325333 56.746667 56.746667 42.965333-42.325333a21.973333 21.973333 0 0 0 4.522667-24.405334l-1.834667-3.328-2.816-3.498666z"></path>
        </svg>
      </i>
    );
  }
};
