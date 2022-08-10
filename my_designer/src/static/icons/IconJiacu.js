import classNames from "classnames";
export default {
  name: "IconJiacu",
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
        <svg class="icon svg-icon" id="iconjiacu" viewBox="0 0 1024 1024">
          <path d="M592.174652 842.425798c31.058745 0 56.656612-10.83643 76.793601-32.509291 19.966336-21.758187 29.949504-47.44138 29.949504-77.049579 0-29.693526-9.983168-55.462045-30.034831-77.049579a99.831681 99.831681 0 0 0-76.7936-32.594618H341.656862v219.203067H592.174652zM341.571536 184.901925v219.203066H555.484376c28.92559 0 53.926173-10.83643 75.087076-32.509291a106.657779 106.657779 0 0 0 31.741355-77.049579 106.657779 106.657779 0 0 0-31.741355-77.134905 101.452879 101.452879 0 0 0-75.087076-32.423965H341.656862zM742.348804 496.598617C844.740272 544.466628 895.936005 627.830347 895.936005 746.60445c0 77.646863-25.000583 143.348054-75.087076 196.932922-50.086493 53.670194-112.971919 80.462628-188.656278 80.462628H128V0h447.365386c80.206649 0 147.529039 28.498958 202.052496 85.582201 54.523456 57.168569 81.827848 126.709441 81.827848 208.96392 0 82.169153-38.994084 149.491542-116.896926 201.96717z"></path>
        </svg>
      </i>
    );
  }
};