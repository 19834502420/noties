import classNames from "classnames";
export default {
  name: "IconKeshihua",
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
        <svg class="icon svg-icon" id="iconkeshihua" viewBox="0 0 1024 1024">
          <path d="M960 0l8.704 0.597333A64 64 0 0 1 960 128v544.853333h32a32 32 0 1 1 0 64H576v49.493334c36.608 22.784 64 64 64 109.653333 0 68.608-59.392 128-128 128s-128-59.392-128-128c0-45.738667 27.392-86.869333 64-109.738667v-49.408H32a32 32 0 1 1 0-64H64V128l-8.704-0.597333A64 64 0 0 1 64 0h896zM512 832a62.464 62.464 0 0 0-64 64c0 36.608 27.392 64 64 64s64-27.392 64-64A62.464 62.464 0 0 0 512 832z m384-704h-768v544.853333h768V128zM292.608 285.269333a51.2 51.2 0 0 1 51.2 51.2V552.106667a51.2 51.2 0 1 1-102.4 0V336.469333a51.2 51.2 0 0 1 51.2-51.2zM512 190.208a51.2 51.2 0 0 1 51.2 51.2V552.106667a51.2 51.2 0 1 1-102.4 0V241.493333a51.2 51.2 0 0 1 51.2-51.2z m219.392 160.853333a51.2 51.2 0 0 1 51.2 51.2v149.930667a51.2 51.2 0 0 1-102.4 0V402.261333a51.2 51.2 0 0 1 51.2-51.2z"></path>
        </svg>
      </i>
    );
  }
};
