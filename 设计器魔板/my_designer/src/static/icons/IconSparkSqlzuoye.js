import classNames from "classnames";
export default {
  name: "IconSparkSqlzuoye",
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
          id="iconSparkSqlzuoye"
          viewBox="0 0 1024 1024"
        >
          <path d="M811.081143 447.707429L386.779429 446.902857c-6.290286-22.747429-19.748571-38.765714-35.254858-38.765714-15.579429 0-28.818286 16.018286-35.254857 38.473143l-103.789714-0.146286c-40.228571 0-73.142857-37.302857-73.142857-83.382857 0-46.006857 32.694857-83.309714 73.142857-83.309714h112.64V211.382857h-112.64C135.68 211.382857 73.142857 279.405714 73.142857 363.373714c0 83.748571 62.610286 151.990857 139.337143 151.990857l108.032 0.146286c7.168 16.091429 18.505143 26.843429 31.012571 26.843429 12.653714 0 23.771429-10.532571 30.793143-26.697143l428.470857 0.877714c40.228571 0 73.216 37.302857 73.216 83.382857 0 41.691429-27.136 76.068571-62.390857 82.139429-1.974857-63.049143-55.296-113.225143-120.32-113.225143-65.462857 0.146286-118.857143 50.907429-120.246857 114.541714H212.626286c-76.8 0-139.337143 68.096-139.337143 152.064 0 84.114286 62.610286 152.429714 139.337143 152.429715h292.571428c6.582857 21.357714 19.529143 36.132571 34.669715 36.132571 15.067429 0 28.233143-14.774857 34.596571-36.132571h119.954286v-68.681143H571.245714c-7.021714-16.091429-18.505143-26.916571-31.305143-26.916572s-24.137143 10.678857-31.305142 26.916572H347.062857c-16.603429 0-19.675429 0.146286-24.722286 0.292571l-109.568-0.292571c-40.228571 0-73.142857-37.595429-73.142857-83.748572 0-46.08 32.694857-83.382857 73.142857-83.382857h390.144c3.657143 5.12 7.460571 10.093714 11.849143 14.409143H614.4s83.382857 84.48 87.332571 149.211429c0 0 7.021714-69.485714 83.017143-145.554286 5.924571-5.485714 11.264-11.702857 16.018286-18.212572h10.825143c76.8 0 139.337143-68.022857 139.337143-151.990857-0.585143-83.968-63.049143-152.137143-139.776-152.137143z m-476.16-276.48S416.182857 253.952 419.401143 311.442286c0 0 17.773714-66.925714 85.357714-141.677715h-0.731428A103.862857 103.862857 0 0 0 473.746286 14.336a110.226286 110.226286 0 0 0-108.690286 0c-33.645714 19.017143-53.906286 54.345143-52.955429 92.086857 0 24.576 8.996571 46.884571 23.917715 64.804572H334.994286z"></path>
        </svg>
      </i>
    );
  }
};
