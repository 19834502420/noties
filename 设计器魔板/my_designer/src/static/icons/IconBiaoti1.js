import classNames from "classnames";
export default {
  name: "IconBiaoti1",
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
        <svg class="icon svg-icon" id="iconbiaoti1" viewBox="0 0 1024 1024">
          <path d="M623.396571 0c24.722286 0 48.420571 9.801143 65.828572 27.282286l229.961143 229.888c17.408 17.481143 27.209143 41.179429 27.209143 65.828571v587.190857c0 62.610286-51.2 113.810286-113.737143 113.810286H206.848a114.102857 114.102857 0 0 1-113.737143-113.810286V113.810286C93.110857 51.2 144.310857 0 206.848 0h416.548571z m0 67.510857H206.848a46.592 46.592 0 0 0-46.299429 46.299429v796.379428c0 25.307429 20.992 46.299429 46.299429 46.299429h625.810286a46.592 46.592 0 0 0 46.299428-46.299429V322.998857a25.6 25.6 0 0 0-7.533714-18.066286L641.536 74.971429a25.6 25.6 0 0 0-18.139429-7.460572zM710.948571 325.851429a33.718857 33.718857 0 0 1 0 67.437714H542.208v410.770286a33.718857 33.718857 0 1 1-67.437714 0V393.289143H313.051429a33.718857 33.718857 0 0 1 0-67.437714h397.897142z"></path>
        </svg>
      </i>
    );
  }
};
