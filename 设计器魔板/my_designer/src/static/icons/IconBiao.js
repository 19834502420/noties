import classNames from "classnames";
export default {
  name: "IconBiao",
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
        <svg class="icon svg-icon" id="iconbiao" viewBox="0 0 1024 1024">
          <path
            d="M698.88 256l-0.0512 256H1024v307.2h-325.1712v153.6h-66.4576l-0.0512-153.6H0v-307.2h632.32V256h66.56z m-66.56 322.5088L66.56 578.56v174.08h565.76v-174.1312z m325.12 0.0512l-258.6112-0.0512V752.64H957.44v-174.08z"
            fill="#9FBEFB"
          ></path>
          <path d="M358.4 256v716.8H51.2V256z" fill="#5B8FF8"></path>
          <path d="M51.2 51.2h921.6v256H51.2z" fill="#5D7092"></path>
          <path
            d="M921.6 0a102.4 102.4 0 0 1 102.4 102.4v819.2a102.4 102.4 0 0 1-102.4 102.4H102.4a102.4 102.4 0 0 1-102.4-102.4V102.4a102.4 102.4 0 0 1 102.4-102.4h819.2z m0 66.56H102.4a35.84 35.84 0 0 0-35.5328 30.976L66.56 102.4v819.2a35.84 35.84 0 0 0 30.976 35.5328L102.4 957.44h819.2a35.84 35.84 0 0 0 35.5328-30.976L957.44 921.6V102.4a35.84 35.84 0 0 0-30.976-35.5328L921.6 66.56z"
            fill="#5D7092"
          ></path>
        </svg>
      </i>
    );
  }
};
