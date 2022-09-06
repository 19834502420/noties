import classNames from "classnames";
export default {
  name: "IconKudu",
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
        <svg class="icon svg-icon" id="iconKudu" viewBox="0 0 1024 1024">
          <path d="M777.664 64A182.528 182.528 0 0 1 960 246.4v531.2A182.528 182.528 0 0 1 777.344 960H246.4A182.592 182.592 0 0 1 64 777.6v-531.2A182.592 182.592 0 0 1 246.4 64h531.264z m0 53.312L246.4 117.504A129.152 129.152 0 0 0 117.376 246.592v531.2c0 71.232 57.792 128.96 129.024 129.024h531.264a129.152 129.152 0 0 0 129.024-129.024V246.4A129.152 129.152 0 0 0 777.664 117.312zM284.352 331.52v217.6l99.072-217.6h44.864L349.696 500.864l86.848 263.232h-43.2L325.248 550.528 284.352 638.08v125.824h-36.8V331.52h36.8z m258.112-0.192v259.008a169.792 169.792 0 0 0 20.864 92.8c16.256 22.528 43.072 35.008 70.784 32.832 27.776 2.432 54.72-10.112 70.784-32.896 15.616-28.288 22.912-60.48 20.864-92.8V331.392h39.68v259.008a206.144 206.144 0 0 1-32.512 125.76c-23.488 29.376-59.84 45.568-97.408 43.392a112.256 112.256 0 0 1-97.408-43.392A208.832 208.832 0 0 1 505.6 590.336V331.328h36.864z"></path>
        </svg>
      </i>
    );
  }
};
