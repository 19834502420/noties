import classNames from "classnames";
export default {
  name: "IconBiaoti2",
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
        <svg class="icon svg-icon" id="iconbiaoti2" viewBox="0 0 1080 1024">
          <path
            d="M177.664 1024v-453.176889h441.116444V1024H796.444444V0h-177.664v427.406222H177.664V0H0v1024z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M1080.888889 1024v-455.111111h-71.509333c-19.512889 15.928889-43.918222 30.606222-73.159112 44.600889-29.240889 12.743111-56.888889 21.674667-82.887111 26.737778v73.955555c53.646222-12.060444 97.507556-30.549333 132.494223-55.409778V1024H1080.888889z"
            fill="#5D7092"
          ></path>
        </svg>
      </i>
    );
  }
};
