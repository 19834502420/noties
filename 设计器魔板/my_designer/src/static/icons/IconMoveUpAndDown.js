import classNames from "classnames";
export default {
  name: "IconMoveUpAndDown",
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
          id="iconmove-up-and-down"
          viewBox="0 0 1024 1024"
        >
          <path d="M443.264 99.968c8.533333 8.533333 13.354667 19.498667 14.421333 30.677333l0.213334 6.741334v749.226666a49.92 49.92 0 0 1-99.584 5.845334l-0.341334-5.845334V255.872L193.493333 420.352a49.92 49.92 0 0 1-74.794666-65.92l4.181333-4.693333 249.728-249.770667a49.92 49.92 0 0 1 70.656 0z m203.178667 828.416l-5.162667 3.456-4.181333 2.176a49.749333 49.749333 0 0 1-31.957334 3.456l-6.058666-1.749333-5.504-2.389334-4.906667-2.816-4.608-3.413333-3.328-3.072a50.432 50.432 0 0 1-4.266667-4.864l-3.072-4.48-1.365333-2.389333a49.578667 49.578667 0 0 1-5.546667-17.749334l-0.384-5.845333V139.52a49.92 49.92 0 0 1 99.584-5.845333l0.341334 5.845333v628.608l164.48-164.437333a49.92 49.92 0 0 1 74.794666 65.92l-4.181333 4.693333-252.16 252.032 2.432-2.261333-3.328 3.029333-1.621333 1.28z"></path>
        </svg>
      </i>
    );
  }
};
