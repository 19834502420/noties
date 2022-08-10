import classNames from "classnames";
export default {
  name: "IconScreenPutItAway",
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
          id="iconscreen-put-it-away"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M39.384615 39.384615m78.769231 0l787.692308 0q78.769231 0 78.769231 78.769231l0 787.692308q0 78.769231-78.769231 78.769231l-787.692308 0q-78.769231 0-78.769231-78.769231l0-787.692308q0-78.769231 78.769231-78.769231Z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M866.461538 0a157.538462 157.538462 0 0 1 157.538462 157.538462v708.923076a157.538462 157.538462 0 0 1-157.538462 157.538462H157.538462a157.538462 157.538462 0 0 1-157.538462-157.538462V157.538462a157.538462 157.538462 0 0 1 157.538462-157.538462h708.923076z m0 39.384615H157.538462a118.153846 118.153846 0 0 0-117.956924 111.222154L39.384615 157.538462v708.923076a118.153846 118.153846 0 0 0 111.222154 117.956924L157.538462 984.615385h708.923076a118.153846 118.153846 0 0 0 117.956924-111.222154L984.615385 866.461538V157.538462a118.153846 118.153846 0 0 0-111.222154-117.956924L866.461538 39.384615z"
            fill="#D9D9D9"
          ></path>
          <path
            d="M487.857231 380.731077l-203.224616 217.166769a33.201231 33.201231 0 0 0 1.496616 46.867692 33.083077 33.083077 0 0 0 46.788923-1.45723l179.121231-191.409231 179.042461 191.330461a33.083077 33.083077 0 0 0 46.788923 1.496616 33.201231 33.201231 0 0 0 1.457231-46.867692l-203.224615-217.245539a32.925538 32.925538 0 0 0-48.285539 0.078769z"
            fill="#666666"
          ></path>
        </svg>
      </i>
    );
  }
};
