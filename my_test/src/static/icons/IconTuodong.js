import classNames from "classnames";
export default {
  name: "IconTuodong",
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
        <svg class="icon svg-icon" id="icontuodong" viewBox="0 0 1024 1024">
          <path
            d="M512 0l198.769778 256.056889L967.111111 455.111111l-256.227555 198.883556L512 910.222222l-199.054222-256.341333L56.888889 455.111111l256.170667-198.940444L512 0z m183.978667 639.089778V519.111111H576.056889v120.035556l119.921778-0.056889z m-248.035556-119.978667H327.964444l0.056889 119.978667h119.978667l-0.056889-119.978667z m0-248.035555l-119.921778 0.056888v119.921778l119.921778-0.056889V271.075556z m128.113778 0v119.921777h119.921778V271.189333H576.056889z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M512 59.164444l141.368889 179.768889H540.216889v190.179556h190.293333V316.074667L910.222222 457.386667l-179.712 141.368889V485.660444H540.216889v190.350223l113.208889-0.056889L512 855.608889l-141.368889-179.768889 113.038222 0.113778V485.660444H293.432889l0.056889 113.152L113.777778 457.443556l179.712-141.368889-0.056889 113.038222h190.236444V238.933333H370.631111z"
            fill="#0F0F0F"
          ></path>
        </svg>
      </i>
    );
  }
};
