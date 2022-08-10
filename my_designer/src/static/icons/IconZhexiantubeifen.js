import classNames from "classnames";
export default {
  name: "IconZhexiantubeifen",
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
          id="iconzhexiantubeifen"
          viewBox="0 0 1365 1024"
        >
          <path
            d="M992 1024H0V32a32 32 0 0 1 64 0V960h928a32 32 0 0 1 0 64z"
            fill="#5D7092"
          ></path>
          <path
            d="M182.3744 664.32c8.8064 0 17.6128-3.0208 24.832-9.216L419.84 470.6816l206.592 184.0128c15.36 13.7216 38.912 12.6464 52.8896-2.4576l296.3968-260.3008a37.888 37.888 0 1 0-55.5008-51.6096l-271.104 233.216-203.6736-181.6064a37.9392 37.9392 0 0 0-50.0224-0.3584l-237.8752 206.2336a37.888 37.888 0 0 0 24.7808 66.56z"
            fill="#5B8FF8"
          ></path>
        </svg>
      </i>
    );
  }
};
