import classNames from "classnames";
export default {
  name: "IconPythonzuoye",
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
        <svg class="icon svg-icon" id="iconpythonzuoye" viewBox="0 0 1194 1024">
          <path d="M1194.666667 0v1024H0V0h1194.666667z m-99.413334 102.4H99.413333v819.2h995.84V102.4zM446.464 205.141333h99.413333l-0.085333 0.256h49.493333c77.824 0 142.506667 62.464 148.565334 141.312l0.512 12.544c0 84.48-67.072 153.6-149.162667 153.6h-49.408v306.602667H446.549333L446.293333 209.749333h-48.64v-1.706666l48.64-0.085334v-2.816z m-48.64 102.229334L296.96 512.085333l100.864 204.544H296.704L196.266667 512.597333h-0.597334L196.010667 512l-0.256-0.682667H196.266667l100.352-203.946666h101.12z m495.786667 0l100.522666 204.032h0.597334l-0.256 0.682666 0.256 0.512h-0.597334l-100.522666 203.946667H792.746667l100.778666-204.458667L792.746667 307.370667h100.949333z m-298.410667 0.512v0.170666h-49.322667v102.570667h49.322667a49.152 49.152 0 0 0 35.157333-15.189333 51.712 51.712 0 0 0 0-72.362667 48.896 48.896 0 0 0-35.157333-15.189333z"></path>
        </svg>
      </i>
    );
  }
};
