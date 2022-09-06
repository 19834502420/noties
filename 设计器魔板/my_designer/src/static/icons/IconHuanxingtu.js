import classNames from "classnames";
export default {
  name: "IconHuanxingtu",
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
        <svg class="icon svg-icon" id="iconhuanxingtu" viewBox="0 0 1024 1024">
          <path
            d="M460.8 2.56V261.12a256.1024 256.1024 0 0 0 51.2 506.88 256.1024 256.1024 0 0 0 250.88-204.8h258.56c-25.6512 258.7136-243.968 460.8-509.44 460.8-282.7776 0-512-229.2224-512-512C0 246.528 202.0864 28.2112 460.8 2.56z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M1021.44 563.2c-25.6512 258.7136-243.968 460.8-509.44 460.8h-1.28v-256H512a256.1024 256.1024 0 0 0 250.88-204.8h258.56z"
            fill="#CDDCFB"
          ></path>
          <path
            d="M512 0c282.7776 0 512 229.2224 512 512h-256a256 256 0 0 0-256-256V0z m51.2 54.016v155.0848l5.2224 0.8704A307.5072 307.5072 0 0 1 814.08 455.5776l0.8192 5.2224h155.0848l-0.256-2.56a461.056 461.056 0 0 0-390.1952-402.1248L563.2 54.016z"
            fill="#5D7092"
          ></path>
        </svg>
      </i>
    );
  }
};
