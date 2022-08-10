import classNames from "classnames";
export default {
  name: "IconDuoweizuhechengyuanciji",
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
          id="iconduoweizuhechengyuanciji"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M0 624.054857l223.817143 116.809143v280.722286L0 901.851429V624.054857z m534.162286 0l223.744 116.809143v280.722286l-223.817143-119.661715V624.054857zM246.418286 477.622857v0.073143l215.04 113.590857-215.04 113.517714-217.965715-113.590857L246.491429 477.622857z m534.089143 0l0.073142 0.073143 215.04 113.590857-215.04 113.517714-217.892571-113.590857 217.819429-113.590857zM264.777143 146.358857l223.817143 116.736v280.722286L264.777143 424.301714v-277.942857zM511.122286 0l215.113143 113.517714-215.04 113.590857-217.819429-113.590857L511.122286 0z"
            fill="#B79F55"
          ></path>
          <path
            d="M486.619429 625.810286v279.405714L265.874286 1021.805714v-278.235428l220.745143-117.76z m534.162285 0v279.405714l-220.818285 116.662857v-278.235428h0.073142l220.745143-117.76z m-269.312-477.622857v279.332571L530.724571 544.182857V265.874286l220.745143-117.76z"
            fill="#D8CDAB"
          ></path>
        </svg>
      </i>
    );
  }
};
