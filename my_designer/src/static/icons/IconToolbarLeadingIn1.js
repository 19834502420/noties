import classNames from "classnames";
export default {
  name: "IconToolbarLeadingIn1",
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
          id="icontoolbar-leading-in-1"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M921.408 664.32c30.4 0 46.08 25.472 35.072 56.96l-90.24 245.696c-11.072 31.488-44.736 57.024-75.136 57.024H102.592c-23.68 0-38.4-15.04-38.592-36.16a52.416 52.416 0 0 1 0.768-10.176 55.296 55.296 0 0 1-0.768-9.024v-531.84c0-30.656 24.64-55.424 55.04-55.424h247.936c30.4 0 55.04 24.768 55.04 55.36v95.232h332.032c30.464 0 55.104 24.832 55.104 55.424v76.608h112.256c1.984 0 3.904 0.064 5.76 0.256h-5.76z m-176.256 0V595.456H358.016V444.928H128v219.328L123.008 816l34.752-94.72c11.072-31.488 44.736-56.96 75.136-56.96h512.256zM589.504 508.416l-11.072-6.4C455.488 346.304 496 120.384 760.704 127.232V0L960 196.736l-199.296 196.672V263.36c-216-4.992-222.208 134.336-174.336 238.72l3.136 6.4z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
