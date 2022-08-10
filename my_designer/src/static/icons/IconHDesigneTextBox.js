import classNames from "classnames";
export default {
  name: "IconHDesigneTextBox",
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
          id="iconh-designe-text-box"
          viewBox="0 0 1024 1024"
        >
          <path d="M87.038853 609.293271a51.198362 51.198362 0 0 0 66.55787-30.719017L194.555413 460.818022h235.512463l40.95869 117.756232a51.198362 51.198362 0 0 0 46.078525 35.838853h15.359509a51.198362 51.198362 0 0 0 30.719017-66.55787L404.468695 66.590637A98.300854 98.300854 0 0 0 312.311644 0.032767a93.693002 93.693002 0 0 0-92.157051 66.55787L61.439672 547.855237a40.958689 40.958689 0 0 0 25.599181 61.438034zM307.191808 112.669163L389.109187 358.421299H225.27443L307.191808 112.669163zM793.576244 614.413107a241.144283 241.144283 0 0 0 87.037215-20.479345 46.590509 46.590509 0 0 0 40.958689 20.479345 55.294231 55.294231 0 0 0 51.198362-51.198362V307.222937a51.198362 51.198362 0 0 0-51.198362-51.198362 45.566542 45.566542 0 0 0-40.958689 20.479345 168.44261 168.44261 0 0 0-87.037215-20.479345A181.2422 181.2422 0 0 0 614.381978 435.218841a178.170299 178.170299 0 0 0 179.194266 179.194266z m0-255.991808A76.797542 76.797542 0 1 1 716.778701 435.218841 75.261592 75.261592 0 0 1 793.576244 358.421299zM921.572148 716.80983H102.398362a51.198362 51.198362 0 1 0 0 102.396723h819.173786a51.198362 51.198362 0 1 0 0-102.396723zM716.778701 921.603277H102.398362a51.198362 51.198362 0 0 0 0 102.396723h614.380339a51.198362 51.198362 0 0 0 0-102.396723z"></path>
        </svg>
      </i>
    );
  }
};
