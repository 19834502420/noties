import classNames from "classnames";
export default {
  name: "IconHDesigneRevoke",
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
          id="iconh-designe-revoke"
          viewBox="0 0 1024 1024"
        >
          <path d="M585.587922 148.37006H172.60444l63.550689-63.550689c19.199604-19.327601 19.199604-50.558957 0-69.886559a47.679017 47.679017 0 0 0-69.31057 0L13.759716 166.80168a52.094926 52.094926 0 0 0 0 70.526545L166.844559 389.133094c9.919795 9.663801 23.679512 14.335704 37.503226 12.671739a85.118244 85.118244 0 0 0 38.143214-12.671739c19.199604-19.327601 19.199604-50.558957 0-69.886558l-63.55069-63.55069H591.98779a331.001173 331.001173 0 1 1-330.361186 331.001173v-25.407476a54.654873 54.654873 0 0 0-50.878951-50.814952 55.29486 55.29486 0 0 0-50.814952 50.814952v25.407476A435.831011 435.831011 0 0 0 591.98779 1016.960145 436.470998 436.470998 0 0 0 1023.97888 585.609042a444.790826 444.790826 0 0 0-438.390958-437.174983z"></path>
        </svg>
      </i>
    );
  }
};
