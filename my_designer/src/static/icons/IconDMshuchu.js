import classNames from "classnames";
export default {
  name: "IconDMshuchu",
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
        <svg class="icon svg-icon" id="iconDMshuchu" viewBox="0 0 1024 1024">
          <path d="M790.656 892.928a33.6 33.6 0 1 1 0 67.072h-560a33.6 33.6 0 1 1 0-67.072zM848 64c61.632 0 112 50.304 112 111.808v503.232c0 61.44-50.368 111.808-112 111.808H176c-61.568 0-112-50.304-112-111.808V175.808C64 114.368 114.432 64 176 64z m0 67.072H176c-24.32 0-44.8 20.48-44.8 44.8v503.168c0 24.256 20.48 44.736 44.8 44.736h672c24.32 0 44.8-20.48 44.8-44.8V175.872a45.376 45.376 0 0 0-44.8-44.736z m-512 171.392c85.952 0.96 130.048 44.928 130.944 130.752-0.896 84.992-44.992 128.512-130.88 129.408H246.144V302.464z m254.784 0l51.584 178.304 55.552-178.24h91.072V562.56h-57.728v-199.04l-65.216 199.04H615.68l-62.4-202.24v202.24h-57.728V302.528h95.232z m-254.336 49.408H306.56V513.28h25.472c1.472 0.128 3.008 0.128 4.48 0.128 20.48 0 36.352-5.568 47.104-16.512 12.864-13.056 19.2-34.432 18.752-63.488 0.448-29.952-5.952-51.712-19.072-65.024-10.752-10.88-26.56-16.448-46.912-16.448z"></path>
        </svg>
      </i>
    );
  }
};
