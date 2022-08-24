import classNames from "classnames";
export default {
  name: "IconJiandanbiao",
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
        <svg class="icon svg-icon" id="iconjiandanbiao" viewBox="0 0 1024 1024">
          <path
            d="M391.68 957.44h-66.56v-158.4128H66.56v-66.56h258.56v-174.08H66.56v-66.56h258.56V307.2h66.56l-0.0512 184.6272h240.6912V307.2h66.56l-0.0512 184.6272H957.44v307.2h-258.6112V957.44h-66.4576l-0.0512-158.4128H391.6288V957.44z m-0.0512-224.9728h240.6912v-174.08H391.6288v174.08z m565.8112-174.08h-258.6112v174.08H957.44v-174.08z"
            fill="#92E3C3"
          ></path>
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
