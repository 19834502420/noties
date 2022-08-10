import classNames from "classnames";
export default {
  name: "IconFabuxuanze",
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
        <svg class="icon svg-icon" id="iconfabuxuanze" viewBox="0 0 1024 1024">
          <path
            d="M945.664 121.344l-507.757714 621.641143 402.139428 200.338286 117.540572-832.219429z"
            fill="#D0DBF0"
          ></path>
          <path
            d="M531.968 822.710857l66.925714 33.133714L455.094857 994.742857v-102.180571l76.8-69.851429zM1019.318857 36.132571l-0.073143-3.072-0.073143-0.877714-0.365714-2.413714-0.073143-0.731429a23.698286 23.698286 0 0 0-0.731428-2.852571l-0.219429-0.877714a18.139429 18.139429 0 0 0-0.731428-1.974858L1016.685714 22.308571a28.013714 28.013714 0 0 0-1.097143-2.413714l-0.512-1.024a25.6 25.6 0 0 0-1.682285-2.779428l-1.462857-1.901715-0.438858-0.585143a54.710857 54.710857 0 0 0-2.486857-2.925714L1006.957714 8.777143a31.085714 31.085714 0 0 0-2.413714-1.828572L1004.032 6.582857l-0.731429-0.512-1.974857-1.170286-0.804571-0.438857-2.633143-1.243428-1.024-0.365715a21.065143 21.065143 0 0 0-1.828571-0.658285l-1.097143-0.365715-2.706286-0.731428-0.731429-0.146286a29.257143 29.257143 0 0 0-5.851428-0.512h-0.438857l-2.998857 0.073143-0.731429 0.073143-2.486857 0.365714-0.731429 0.073143a48.64 48.64 0 0 0-2.925714 0.731429l-0.658286 0.219428a26.916571 26.916571 0 0 0-3.145143 1.097143c-0.658286 0.292571-1.316571 0.146286-1.901714 0.438857-0.365714 0.146286-0.585143 0-0.950857 0L19.456 501.906286a35.986286 35.986286 0 0 0 0.438857 63.488l359.131429 170.276571a35.108571 35.108571 0 0 0 51.2-33.645714 35.474286 35.474286 0 0 0-19.309715-29.696L113.078857 533.211429l730.404572-383.488-450.267429 542.354285a35.766857 35.766857 0 0 0-8.192 22.747429v271.213714a35.401143 35.401143 0 1 0 70.656 0V727.771429l474.989714-572.196572-108.251428 734.72-344.941715-175.396571a35.254857 35.254857 0 0 0-47.250285 16.091428 35.620571 35.620571 0 0 0 15.798857 47.542857l388.534857 197.12a35.254857 35.254857 0 0 0 50.688-26.624L1018.88 40.96l0.146286-0.950857 0.146285-1.024a22.454857 22.454857 0 0 0 0.146286-2.925714z"
            fill="#1E88E5"
          ></path>
        </svg>
      </i>
    );
  }
};