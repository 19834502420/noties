import classNames from "classnames";
export default {
  name: "IconLeftDrag",
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
        <svg class="icon svg-icon" id="iconleft-drag" viewBox="0 0 1024 1024">
          <path
            d="M819.2464 0.064V1024H667.3104l2.112-436.672H448.2384v95.552a43.392 43.392 0 0 1-12.736 30.656 43.776 43.776 0 0 1-61.696 0L206.9584 547.776a50.304 50.304 0 0 1 0-71.488l166.848-165.76a43.712 43.712 0 0 1 30.848-12.736l4.48 0.256a43.52 43.52 0 0 1 39.168 43.072v95.552h219.328V0L819.2464 0.064zM704.1744 473.216H413.6784V342.592a7.232 7.232 0 1 0-12.288-5.12L235.5664 501.888a14.208 14.208 0 0 0 0 20.16l165.76 164.416a7.296 7.296 0 0 0 10.176 0 7.104 7.104 0 0 0 2.112-5.12V550.848h292.48l-1.92 433.792h78.4V39.36H704.1744v433.856z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M392.3664 680.128a12.224 12.224 0 0 0 20.928-8.64v-119.68h292.736l-1.92 432.832h78.592V473.344l1.92-433.92H706.0944l-1.92 433.92H413.2304v-119.68a12.224 12.224 0 0 0-20.928-8.704L242.1584 495.232a24.512 24.512 0 0 0 0 34.688l150.208 150.208z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
