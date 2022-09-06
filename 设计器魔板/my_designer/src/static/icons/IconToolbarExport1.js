import classNames from "classnames";
export default {
  name: "IconToolbarExport1",
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
          id="icontoolbar-export-1"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M921.408 652.8c30.4 0 46.08 26.304 35.072 58.88l-90.24 253.44c-11.072 32.512-44.736 58.88-75.136 58.88H102.592c-23.68 0-38.4-15.552-38.592-37.312a55.744 55.744 0 0 1 0.768-10.496 58.88 58.88 0 0 1-0.768-9.344V417.92c0-31.552 24.64-57.152 55.04-57.152h247.936c30.4 0 55.04 25.6 55.04 57.152v98.304h332.032c30.464 0 55.104 25.6 55.104 57.152v79.04h112.256c1.984 0 3.904 0.128 5.76 0.32h-5.76z m-176.256 0V581.76H358.016V426.432H128v226.368l-4.992 156.608 34.752-97.728c11.072-32.512 44.736-58.88 75.136-58.88h512.256z m45.952 305.6c2.24 0 12.288-7.872 14.976-15.744l79.872-224.32H232.896c-2.24 0-12.288 7.936-14.976 15.744l-79.872 224.32h653.056zM409.664 83.072l6.528-11.072c160.768-122.944 393.92-82.432 386.88 182.272H934.4l-203.008 199.296-203.008-199.296h134.208C667.712 38.272 523.968 32 416.192 79.936l-6.592 3.136z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
