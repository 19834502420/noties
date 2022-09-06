import classNames from "classnames";
export default {
  name: "IconSinkshujuyuan",
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
          id="iconSinkshujuyuan"
          viewBox="0 0 1024 1024"
        >
          <path d="M989.269547 941.524313H41.018493a41.164727 41.164727 0 0 0-41.018493 41.237843c0 22.812424 18.352303 41.237844 41.018493 41.237844h948.32417a40.945377 40.945377 0 0 0 0-80.940236v-1.462335z m-521.541736-53.740807h94.832417a67.194288 67.194288 0 0 0 50.962371-23.543592c13.672831-15.7201 21.130739-35.973438 20.911389-56.81171V511.890325a76.187647 76.187647 0 0 0-71.361942-80.428419H467.727811a66.682471 66.682471 0 0 0-50.96237 23.616709 85.765941 85.765941 0 0 0-20.399572 56.81171v296.049696a76.187647 76.187647 0 0 0 71.361942 80.428419v-0.584934z m0-376.404998h94.832417v296.049696H467.727811V511.378508z m284.424135 376.404998h94.905533a66.682471 66.682471 0 0 0 50.962371-23.543592c13.672831-15.7201 21.057622-35.973438 20.911389-56.81171V322.956658a76.187647 76.187647 0 0 0-71.361942-80.428418h-95.344235a69.16844 69.16844 0 0 0-50.96237 23.616708 87.301392 87.301392 0 0 0-20.472688 56.81171v484.471546a76.041414 76.041414 0 0 0 18.86412 54.910675c13.307247 15.135166 32.025134 24.274759 52.059121 25.444627h0.511817z m0-563.291396h94.905533v484.471546h-94.832417V324.49211z m-568.848269 563.291396h94.759301a75.310246 75.310246 0 0 0 52.059121-25.444627 76.041414 76.041414 0 0 0 18.86412-54.910675V81.305819a87.740093 87.740093 0 0 0-20.472688-57.396644A69.16844 69.16844 0 0 0 277.697394 0.365584h-94.3206a68.217922 68.217922 0 0 0-51.035487 23.543591 87.740093 87.740093 0 0 0-20.911389 57.396644v726.049268a76.187647 76.187647 0 0 0 71.435059 80.428419h0.511817z m0-806.477687h94.759301v726.049268H183.303677v-726.049268z"></path>
        </svg>
      </i>
    );
  }
};
