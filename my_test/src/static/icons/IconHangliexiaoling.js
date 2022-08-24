import classNames from "classnames";
export default {
  name: "IconHangliexiaoling",
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
          id="iconhangliexiaoling"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M930.889143 279.259429v70.582857a416.914286 416.914286 0 0 0-232.740572-70.582857 416.914286 416.914286 0 0 0-238.445714 74.459428H74.459429v223.451429h222.573714a416.841143 416.841143 0 0 0-15.213714 74.459428H0V279.405714h930.889143z"
            fill="#888888"
          ></path>
          <path
            d="M837.851429 46.518857c51.346286 0 93.037714 41.691429 93.037714 93.110857v210.212572a417.792 417.792 0 0 0-74.386286-39.643429V139.702857a18.651429 18.651429 0 0 0-18.651428-18.578286H651.629714v160.768c-25.6 2.852571-50.468571 7.972571-74.459428 15.213715V121.051429H353.718857v338.651428a416.914286 416.914286 0 0 0-74.459428 238.445714c0 66.925714 15.725714 130.194286 43.593142 186.221715H93.110857C41.691429 884.297143 0 842.605714 0 791.259429V139.702857C0 88.210286 41.691429 46.518857 93.110857 46.518857h744.740572zM279.259429 120.978286H93.110857a18.651429 18.651429 0 0 0-18.651428 18.651428v651.702857c0 10.24 8.338286 18.578286 18.651428 18.578286h186.148572V120.905143z"
            fill="#000000"
          ></path>
          <path
            d="M694.857143 365.714286a329.142857 329.142857 0 1 1 0 658.285714 329.142857 329.142857 0 0 1 0-658.285714z m0 59.830857a269.312 269.312 0 0 0 0 538.624 269.312 269.312 0 0 0 0-538.624z m115.931428 242.322286a29.988571 29.988571 0 0 1 0 59.830857H565.979429a29.988571 29.988571 0 0 1 0-59.830857h244.809142z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};