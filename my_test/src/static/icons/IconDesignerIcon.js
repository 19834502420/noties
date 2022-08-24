import classNames from "classnames";
export default {
  name: "IconDesignerIcon",
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
          id="icondesigner-icon"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M93.354667 389.546667c22.869333 7.765333 47.530667 12.032 73.216 12.032l8.789333-0.341334v469.333334h482.048l-48.298667 78.848-433.664 0.085333c-42.069333 0-76.8-30.464-81.493333-69.802667l-0.597333-9.216V389.546667zM850.773333 98.304c42.069333 0 76.8 30.549333 81.493334 69.802667l0.597333 9.216-0.085333 654.336-82.005334-133.888V177.322667H419.84a202.837333 202.837333 0 0 0-21.333333-79.104l452.266666 0.085333z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M720.64 617.130667l-204.8 357.973333c-13.312 23.210667 9.898667 48.896 44.117333 48.896h416.085334c34.474667 0 57.685333-26.026667 43.946666-49.322667L808.789333 616.789333c-16.810667-28.501333-71.765333-28.16-88.149333 0.341334z m44.8 103.424l137.472 232.96H632.149333l133.290667-232.96zM256 0a256 256 0 1 1 0 512 256 256 0 0 1 0-512z m0 92.16a163.84 163.84 0 1 0 0 327.68 163.84 163.84 0 0 0 0-327.68z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
