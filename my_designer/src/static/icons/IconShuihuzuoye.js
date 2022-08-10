import classNames from "classnames";
export default {
  name: "IconShuihuzuoye",
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
        <svg class="icon svg-icon" id="iconshuihuzuoye" viewBox="0 0 1024 1024">
          <path d="M682.663299 0c20.098494 0 38.735279 20.756263 38.735279 41.585611 0 20.756263-18.636785 39.977732-38.735279 39.977732H267.026442c-62.122618 0-114.74413 54.302477-114.74413 118.25223v625.099708c0 63.949754 52.621512 118.398401 114.74413 118.398401h474.543716c71.331382 0 128.703447-60.80708 128.703447-132.723146V295.776747c0-20.756263 18.636785-39.977732 38.735279-39.977732 21.779459 0 40.343159 19.221469 40.343159 39.977732v514.813789c0 115.109557-91.502962 212.605524-206.247091 212.605524H267.026442C159.956283 1023.19606 73.130789 933.666405 73.130789 824.915281V199.815573C73.130789 89.529655 159.956283 0 267.026442 0z m68.188709 673.116837c20.171579 0 38.735279 19.148383 38.735279 39.904646 0 20.829348-18.5637 39.977732-38.735279 39.977732H316.651451c-20.171579 0-38.735279-19.148383-38.73528-39.977732 0-20.756263 18.5637-39.977732 38.73528-39.977732zM884.232923 25.579902a36.688887 36.688887 0 0 1 54.302476 0 39.466134 39.466134 0 0 1 0 55.983441L539.927448 506.774392c-9.28185 8.039398-18.5637 12.789951-29.453429 12.78995a38.296767 38.296767 0 0 1-26.310756-11.182071 42.754978 42.754978 0 0 1-3.142674-55.910356z"></path>
        </svg>
      </i>
    );
  }
};