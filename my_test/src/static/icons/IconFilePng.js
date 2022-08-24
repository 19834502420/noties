import classNames from "classnames";
export default {
  name: "IconFilePng",
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
        <svg class="icon svg-icon" id="iconfile-png" viewBox="0 0 1097 1024">
          <path
            d="M36.571429 0v1024h1024V191.707429L804.571429 0H639.780571z"
            fill="#C6358F"
          ></path>
          <path d="M804.571429 192l256 192V192z" fill="#842B63"></path>
          <path d="M804.571429 192h256L804.571429 0" fill="#DB85BC"></path>
          <path
            d="M282.550857 374.272c72.192 0 108.690286 34.084571 108.690286 102.4 0 68.681143-36.498286 103.277714-109.494857 103.277714H207.433143V708.022857h-49.078857V374.272z m-3.803428 46.738286h-71.314286V533.211429h71.314286c21.869714 0 37.814857-4.681143 47.835428-13.165715 10.093714-8.777143 15.140571-23.332571 15.140572-43.446857 0-20.114286-5.412571-34.084571-15.506286-42.496-10.093714-8.923429-26.038857-13.165714-47.469714-13.165714zM418.230857 374.272V708.022857h49.005714V464.018286h1.755429L618.788571 708.022857h47.835429V374.272h-49.517714v240.713143h-1.609143L467.309714 374.272h-49.005714zM836.242286 367.689143c-44.470857 0-79.725714 16.822857-105.764572 51.419428-24.722286 32.256-36.864 73.435429-36.864 123.392 0 49.590857 12.141714 90.258286 36.864 121.563429 26.477714 33.645714 63.414857 50.468571 111.177143 50.468571 26.916571 0 50.834286-3.657143 72.704-11.190857 19.968-7.021714 38.473143-17.846857 54.491429-31.817143v-141.165714h-128.365715v46.811429h79.286858v68.681143c-9.947429 6.582857-20.845714 11.702857-32.256 15.36a140.8 140.8 0 0 1-40.228572 5.705142c-36.571429 0-63.414857-11.264-80.676571-33.645714-15.945143-21.065143-23.844571-51.492571-23.844572-90.697143 0-41.179429 8.777143-72.484571 26.770286-94.939428 16.384-21.504 38.619429-31.817143 66.779429-31.817143 22.674286 0 41.106286 5.12 54.930285 15.945143 13.458286 10.752 22.674286 26.624 26.843429 48.128h49.590857c-5.485714-37.376-18.944-64.950857-40.301714-83.675429-22.235429-19.163429-52.443429-28.525714-91.062857-28.525714z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};
