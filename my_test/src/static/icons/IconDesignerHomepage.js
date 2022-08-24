import classNames from "classnames";
export default {
  name: "IconDesignerHomepage",
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
          id="icondesigner-homepage"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M357.717333 645.461333h274.261334v340.394667H357.717333z"
            fill="#D8D8D8"
          ></path>
          <path
            d="M992 416L563.2 44.8c-32-25.6-70.4-25.6-102.4 0L32 416c-25.6 19.2-32 51.2-19.2 83.2s38.4 51.2 76.8 51.2h38.4v364.8c0 44.8 38.4 83.2 83.2 83.2h614.4c44.8 0 83.2-38.4 83.2-83.2v-57.6a41.301333 41.301333 0 0 0-38.4-38.4 41.301333 41.301333 0 0 0-38.4 38.4l-6.4 57.6H691.2V665.6c0-44.8-32-76.8-76.8-76.8H422.4c-44.8 0-76.8 32-76.8 76.8v249.6H211.2v-396.8a41.301333 41.301333 0 0 0-38.4-38.4H89.6L512 108.8l428.8 371.2h-83.2a41.301333 41.301333 0 0 0-38.4 38.4V678.4c0 19.2 19.2 38.4 38.4 38.4s38.4-19.2 38.4-38.4v-128h44.8c32 0 64-19.2 76.8-51.2 6.4-32 0-64-25.6-83.2z m-576 256h192V921.6h-192V672z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
