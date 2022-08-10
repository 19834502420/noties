import classNames from "classnames";
export default {
  name: "IconDesignerRevoke",
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
          id="icondesigner-revoke"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M381.500908 585.629724a56.818193 56.818193 0 1 1-80.364472 80.466847L16.738345 381.698479l-4.095005-4.60688-0.511876-0.511876-1.023751-1.228501a66.031954 66.031954 0 0 1-7.166258-12.694516l-1.023752-3.480754-0.819001-2.559378a87.428355 87.428355 0 0 1-0.921376-3.685504l-0.511875-3.071254A57.432444 57.432444 0 0 1 0.0512 341.567431l0.20475 5.118756A88.349731 88.349731 0 0 1 0.0512 342.591182V340.441305l0.20475-3.99263 0.409501-3.378379 0.511875-3.071254 0.819001-3.583129 0.921376-2.661753 1.126127-3.378379a46.478306 46.478306 0 0 1 3.071253-6.347258l1.228502-2.047502a54.463565 54.463565 0 0 1 8.39476-10.647013l-4.606881 5.118756a56.101567 56.101567 0 0 1 4.606881-5.118756L301.034061 16.935917a56.818193 56.818193 0 1 1 80.364472 80.466846l-187.346475 187.2441h545.249904a284.295716 284.295716 0 0 1 284.090966 272.010701l0.307125 12.285015v398.239228a56.920568 56.920568 0 0 1-113.738761 0v-398.239228c0-94.185113-76.371842-170.556955-170.65933-170.556955H194.256808l187.346475 187.346475z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};