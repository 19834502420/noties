import classNames from "classnames";
export default {
  name: "IconGuanlianmoren",
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
          id="iconguanlianmoren"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M535.479428 353.622451a44.799925 44.799925 0 1 1 0 89.59985H400.396986v491.177848h530.601782V443.222301H797.622991a44.970592 44.970592 0 0 1-44.37326-36.522605l-0.682665-8.27732c0-23.978627 19.285301-44.799925 45.055925-44.799925h180.053033c24.149293 0 45.055925 20.821299 45.055925 44.799925a44.543926 44.543926 0 0 1-1.450664 11.093315v558.335069a44.799925 44.799925 0 0 1-43.519928 56.14924H355.341061a44.799925 44.799925 0 0 1-45.055925-44.799925v-575.99904V398.337043c0-23.893294 19.285301-44.714592 45.055925-44.714592z"
            fill="#ABABAB"
          ></path>
          <path
            d="M667.319208 0.001707a44.629259 44.629259 0 0 1 45.055925 44.799925v580.863032a44.799925 44.799925 0 0 1-45.055925 44.714592H487.266175a44.799925 44.799925 0 1 1 0-89.599851h134.997108V89.601557H91.661501v491.177848h133.46111c21.418631 0 40.362599 15.189308 44.287927 36.522606l0.767998 8.27732a44.799925 44.799925 0 0 1-45.055925 44.799925H45.069578A45.909257 45.909257 0 0 1 0.013653 623.275335L0.013653 620.800672V44.801632C0.013653 20.823005 20.920285 0.001707 45.069578 0.001707z"
            fill="#3E3E3E"
          ></path>
        </svg>
      </i>
    );
  }
};
