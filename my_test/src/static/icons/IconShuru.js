import classNames from "classnames";
export default {
  name: "IconShuru",
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
        <svg class="icon svg-icon" id="iconshuru" viewBox="0 0 1024 1024">
          <path d="M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0z m0 64C264.917333 64 64 264.874667 64 512S264.874667 960 512 960 960 759.125333 960 512 759.125333 64 512 64z m192 554.666667v85.333333h-384v-85.333333h384z m-341.333333-170.666667v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m-384-128v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z m128 0v85.333333h-85.333334v-85.333333h85.333334z"></path>
        </svg>
      </i>
    );
  }
};
