import classNames from "classnames";
export default {
  name: "IconDb",
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
        <svg class="icon svg-icon" id="iconDB" viewBox="0 0 1024 1024">
          <path
            d="M0 660.918857c105.106286 93.110857 308.809143 136.996571 511.488 136.996572 202.605714 0 406.308571-43.885714 511.414857-135.606858v158.208c-1.097143 110.445714-229.961143 199.460571-511.414857 199.460572C228.864 1019.977143 0 930.889143 0 820.516571zM1022.902857 351.085714v158.281143C1021.805714 619.739429 792.941714 708.754286 511.488 708.754286 228.864 708.754286 0 619.739429 0 509.366857V351.085714c105.106286 93.110857 308.809143 136.996571 511.488 136.996572 202.605714 0 406.308571-43.885714 511.414857-136.996572z"
            fill="#84C1F6"
          ></path>
          <path
            d="M0 199.460571c0 110.226286 228.937143 199.533714 511.488 199.533715 282.404571 0 511.414857-89.307429 511.414857-199.533715C1022.902857 89.307429 793.965714 0 511.488 0S0 89.307429 0 199.460571z"
            fill="#1E88E5"
          ></path>
        </svg>
      </i>
    );
  }
};
