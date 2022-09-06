import classNames from "classnames";
export default {
  name: "IconLeidatu",
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
        <svg class="icon svg-icon" id="iconleidatu" viewBox="0 0 1024 1024">
          <path
            d="M602.112 7.8848a512.6656 512.6656 0 0 1 405.0432 373.4016L611.0208 485.888a102.5536 102.5536 0 0 0-81.0496-74.6496L602.112 7.8848z"
            fill="#87ADFA"
          ></path>
          <path
            d="M512 0a33.28 33.28 0 1 1-2.4064 66.56L512 66.3552V66.56H509.44 512a445.44 445.44 0 1 0 445.44 445.952V512a33.28 33.28 0 1 1 66.56 0c0 282.7776-229.2224 512-512 512S0 794.7776 0 512C0 230.1952 227.6864 1.536 509.184 0H512z m0 192c18.3808 0.2048 33.28 15.104 33.28 33.4848 0 18.3808-14.8992 32.0512-33.28 32.0512A254.464 254.464 0 1 0 766.464 512a33.28 33.28 0 0 1 33.28-33.28c18.3808 0 32.256 14.8992 32.256 33.28A320 320 0 1 1 512 192z"
            fill="#5D7092"
          ></path>
          <path
            d="M512 384a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 51.2a76.8 76.8 0 1 1 0 153.6 76.8 76.8 0 0 1 0-153.6z"
            fill="#5B8FF8"
          ></path>
        </svg>
      </i>
    );
  }
};
