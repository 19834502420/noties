import classNames from "classnames";
export default {
  name: "IconShuaxinMoren",
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
          id="iconshuaxin-moren"
          viewBox="0 0 1030 1024"
        >
          <path
            d="M721.023163 145.073359c-62.89234-35.304575-134.585725-53.970824-207.296418-53.970823-102.895268 0-202.009098 37.191948-279.090196 104.735791-76.364967 66.928105-125.824837 158.713307-139.250614 258.449568l-2.228706 16.564706H1.28502l1.40549-11.699032 1.164549-9.697883c14.750954-123.14102 74.350431-236.677856 167.788758-319.70217C265.81166 46.08 387.306248 0 513.726745 0c164.609673 0 318.069124 77.803922 414.840471 209.551895l94.100915-93.505254v254.326797h-255.933072l96.175686-95.573333a424.223791 424.223791 0 0 0-141.887582-129.726746z m-562.738196 591.644445a423.715137 423.715137 0 0 0 143.386772 136.426248c64.103739 37.07817 137.43017 56.681412 212.055006 56.681412 102.895268 0 202.002405-37.198641 279.083503-104.742484 76.364967-66.928105 125.824837-158.72 139.257308-258.456261l2.235398-16.564706h91.858824l-1.40549 11.699033-1.157857 9.697882c-14.757647 123.14102-74.350431 236.677856-167.788758 319.70217-94.167843 83.673516-215.662431 129.753516-342.082928 129.753516-88.271477 0-175.324863-22.635085-251.776837-65.469072a516.035765 516.035765 0 0 1-169.609202-153.198431L5.822745 888.23634V633.90285h255.919686L158.284967 736.717804z"
            fill="#666666"
            opacity=".85"
          ></path>
        </svg>
      </i>
    );
  }
};
