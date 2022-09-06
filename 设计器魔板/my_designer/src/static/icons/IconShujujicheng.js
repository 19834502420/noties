import classNames from "classnames";
export default {
  name: "IconShujujicheng",
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
          id="iconshujujicheng"
          viewBox="0 0 1194 1024"
        >
          <path d="M1068.988517 510.125478v175.778999l48.56715 0.085205a74.980862 74.980862 0 0 1 74.725245 65.352638l0.596439 9.372608v187.026127a70.890997 70.890997 0 0 1-20.704943 52.827426 75.236479 75.236479 0 0 1-53.849892 22.494258h-189.752704a75.321684 75.321684 0 0 1-75.236479-74.725245V760.629722c0-40.898652 33.997004-74.64004 75.236479-74.64004l49.248793-0.085205V560.993177h-340.8221v124.9113l48.56715 0.085205c38.172075 0 70.038942 28.714262 75.236478 65.352638l0.681644 9.372608v187.026127a70.890997 70.890997 0 0 1-20.619737 52.827426 75.236479 75.236479 0 0 1-53.935097 22.494258H497.259444a75.321684 75.321684 0 0 1-75.236478-74.725245V760.629722c0-40.898652 33.911799-74.64004 75.236478-74.64004l48.567149-0.085205V560.993177H214.97354v124.9113l48.567149 0.085205a75.832917 75.832917 0 0 1 75.236479 65.352638l0.681644 9.372608v187.026127a70.890997 70.890997 0 0 1-20.619737 52.827426 75.236479 75.236479 0 0 1-53.935098 22.494258H75.236479A75.321684 75.321684 0 0 1 0 948.337494V760.629722c0-40.898652 33.911799-74.64004 75.236479-74.64004l48.567149-0.085205V510.210684c0-21.812614 17.978366-39.705775 39.961391-39.705775h382.061574V337.669496h-48.567149a75.492095 75.492095 0 0 1-74.64004-65.352638l-0.596438-9.372608V75.40689c0-40.983858 33.911799-74.725245 75.236478-74.725246h188.304211c41.32468 0 75.236479 33.741388 75.918122 74.725246v187.026127a71.913463 71.913463 0 0 1-20.619737 52.827426 75.236479 75.236479 0 0 1-53.935097 22.494258h-49.930438v132.835414h392.115827c21.983025 0 39.876186 17.89316 39.876185 39.705774zM677.639541 768.724247H505.183558v171.1779h172.455983v-171.263106z m431.992012 0H937.260776v171.1779h172.370777v-171.263106zM255.616575 768.639041H83.245798v171.1779H255.616575v-171.263105zM677.639541 83.245798H505.183558v171.774338h172.455983V83.245798z"></path>
        </svg>
      </i>
    );
  }
};
