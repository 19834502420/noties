import classNames from "classnames";
export default {
  name: "IconRightDrag",
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
        <svg class="icon svg-icon" id="iconright-drag" viewBox="0 0 1024 1024">
          <path
            d="M204.8 0.064V1024h151.936L354.56 587.328h221.184v95.552c0 11.52 4.608 22.464 12.736 30.656a43.776 43.776 0 0 0 61.696 0l166.848-165.76a50.304 50.304 0 0 0 0-71.488L650.24 310.528a43.712 43.712 0 0 0-30.848-12.736l-4.48 0.256a43.52 43.52 0 0 0-39.168 43.072v95.552H356.416V0L204.8 0.064z m115.072 473.152h290.496V342.592a7.232 7.232 0 1 1 12.288-5.12l165.76 164.416a14.208 14.208 0 0 1 0 20.16l-165.76 164.416a7.296 7.296 0 0 1-10.176 0 7.104 7.104 0 0 1-2.112-5.12V550.848h-292.48l1.92 433.792H241.472V39.36h78.464v433.856z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M631.68 680.128a12.224 12.224 0 0 1-20.928-8.64v-119.68H318.016l1.92 432.832H241.408V473.344L239.424 39.424h78.528l1.92 433.92h290.88v-119.68a12.224 12.224 0 0 1 20.928-8.704l150.208 150.272a24.512 24.512 0 0 1 0 34.688L631.68 680.128z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
