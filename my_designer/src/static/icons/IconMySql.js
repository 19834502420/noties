import classNames from "classnames";
export default {
  name: "IconMySql",
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
        <svg class="icon svg-icon" id="iconMySQL" viewBox="0 0 1024 1024">
          <path d="M92.92928 959.936A28.928 28.928 0 0 1 64.00128 930.88V92.8A28.8 28.8 0 0 1 92.92928 64h838.144A28.864 28.864 0 0 1 960.00128 92.8v838.144a28.928 28.928 0 0 1-28.928 29.056L92.92928 959.936zM123.39328 152.768V871.04a28.8 28.8 0 0 0 28.8 29.056h719.36a29.376 29.376 0 0 0 28.8-29.056V152.768a29.376 29.376 0 0 0-28.8-29.056H152.06528a28.864 28.864 0 0 0-28.672 29.12z m478.336 573.056v-40.256c8.064 1.6 16.192 2.624 24.384 3.008 8.96 0.448 17.664-2.56 24.32-8.448 5.12-6.4 9.024-13.632 11.52-21.376l5.312-17.344-87.488-215.04h56.32l59.968 161.152h0.896l58.56-161.152h52.416l-89.728 227.904c-5.952 18.56-14.912 36.096-26.56 51.712a65.728 65.728 0 0 1-54.784 22.08c-11.776 0-23.488-0.768-35.2-2.24h0.064zM493.05728 643.2V413.056H491.52128L403.26528 643.2h-45.632L269.37728 413.056h-0.768V643.2h-53.312V344.448H293.76128L381.88928 577.92h0.768l86.016-233.408h76.8V643.2h-52.48z"></path>
        </svg>
      </i>
    );
  }
};
