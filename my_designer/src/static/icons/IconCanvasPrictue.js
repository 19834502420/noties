import classNames from "classnames";
export default {
  name: "IconCanvasPrictue",
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
          id="iconcanvas-prictue"
          viewBox="0 0 1216 1024"
        >
          <path
            d="M1214.272 3.104H2.048v1018.432h1212.224V3.104z m-3.584 3.552v1011.296H5.632V6.656h1205.056z"
            fill="#D9D9D9"
          ></path>
          <path d="M63.904 64.384h1088.48v895.84H63.904z" fill="#E4E4E4"></path>
          <path
            d="M500.352 391.584l319.136 482.176c19.84 30.272 12.48 64.096-11.648 87.104H62.56v-166.72l266.432-402.56c36.544-55.36 134.816-55.36 171.36 0z"
            fill="#8A898A"
          ></path>
          <path
            d="M948.544 559.68l202.496 237.952v163.232H446.784c0.512-8.736 4.096-17.6 11.264-26.176l319.168-375.008c36.512-43.072 134.784-43.072 171.328 0z"
            fill="#C2C2C2"
          ></path>
          <path
            d="M787.328 325.504a92.096 88.352 90 1 0 176.704 0 92.096 88.352 90 1 0-176.704 0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
