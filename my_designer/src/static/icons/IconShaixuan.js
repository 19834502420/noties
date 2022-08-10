import classNames from "classnames";
export default {
  name: "IconShaixuan",
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
        <svg class="icon svg-icon" id="iconshaixuan" viewBox="0 0 1152 1024">
          <path d="M1059.84 99.712a96.512 96.512 0 0 0-98.816-98.944H99.456A96.512 96.512 0 0 0 0.512 99.84c0 28.16 14.08 56.448 35.328 70.656l388.48 324.864v353.024c0 49.408 21.12 91.776 63.488 120.064l63.616 42.368c35.328 28.16 84.736 0 84.736-49.408V495.232L1024.512 170.24C1045.76 149.12 1059.84 128 1059.84 99.712z"></path>
        </svg>
      </i>
    );
  }
};
