import classNames from "classnames";
export default {
  name: "IconJiahao",
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
        <svg class="icon svg-icon" id="iconjiahao" viewBox="0 0 1024 1024">
          <path d="M614.4 0l-0.128 409.6H1024v204.8H614.272L614.4 1024H409.6l-0.128-409.6H0V409.6h409.472L409.6 0h204.8z"></path>
        </svg>
      </i>
    );
  }
};
