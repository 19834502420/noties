import classNames from "classnames";
export default {
  name: "IconShula",
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
        <svg class="icon svg-icon" id="iconshula" viewBox="0 0 1024 1024">
          <path
            d="M512 394.581333l0 121.059556-106.609778 0 0 123.448889L551.822222 639.089778 341.333333 910.222222l-210.488889-271.132444L277.333333 639.089778l0-123.448889L170.666667 515.640889 170.666667 394.581333 277.333333 394.581333l0-123.448889-146.545777 0L341.333333 0 551.879111 271.189333l-146.488889-0.113777 0 123.448888z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M480.369778 673.621333L339.057778 853.333333l-141.368889-179.712L310.727111 673.621333 310.727111 481.621333l-111.729778 0 0-53.077333L310.727111 428.544 310.727111 236.544l-113.095111 0.056889L339.000889 56.888889l141.368889 179.712-113.095111-0.056889 0 192L479.061333 428.544l0 53.134222-111.786666-0.056889 0 192L480.369778 673.621333z"
            fill="#0F0F0F"
          ></path>
        </svg>
      </i>
    );
  }
};
