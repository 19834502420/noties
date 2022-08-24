import classNames from "classnames";
export default {
  name: "IconGuochengchuli",
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
          id="iconguochengchuli"
          viewBox="0 0 1024 1024"
        >
          <path d="M38.4 454.436571h377.563429c21.211429 0 38.473143-17.261714 38.473142-38.473142V38.473143A38.4 38.4 0 0 0 415.963429 0H38.473143A38.4 38.4 0 0 0 0 38.4v377.563429c0 21.211429 17.188571 38.473143 38.4 38.473142z m57.563429-364.836571H358.4c3.510857 0 6.363429 2.925714 6.363429 6.363429V358.4c0 3.510857-2.852571 6.363429-6.363429 6.363429H95.963429a6.363429 6.363429 0 0 1-6.363429-6.363429V95.963429c0-3.510857 2.925714-6.363429 6.363429-6.363429z m473.6 518.436571v377.563429a38.4 38.4 0 0 0 38.473142 38.4h377.563429c21.211429 0 38.4-17.188571 38.4-38.4V608.036571a38.4 38.4 0 0 0-38.4-38.473142H608.036571a38.4 38.4 0 0 0-38.473142 38.473142z m358.4 326.363429H665.6a6.436571 6.436571 0 0 1-6.436571-6.436571V665.6c0-3.510857 2.925714-6.436571 6.436571-6.436571h262.436571c3.510857 0 6.363429 2.925714 6.363429 6.436571v262.436571c0 3.510857-2.925714 6.363429-6.436571 6.363429z m-640-391.021714h-76.8a6.363429 6.363429 0 0 0-6.363429 6.363428v264.996572c0 7.021714 5.705143 12.8 12.8 12.8h262.363429c3.584 0 6.436571-2.925714 6.436571-6.436572v-76.8a6.436571 6.436571 0 0 0-6.436571-6.363428h-179.2A6.436571 6.436571 0 0 1 294.473143 731.428571V549.741714a6.363429 6.363429 0 0 0-6.436572-6.363428z m456.411428-56.978286h76.8c3.510857 0 6.363429-2.925714 6.363429-6.436571V217.6a12.8 12.8 0 0 0-12.8-12.8H549.741714a6.363429 6.363429 0 0 0-6.363428 6.436571v76.8c0 3.510857 2.852571 6.363429 6.363428 6.363429h181.76c3.584 0 6.436571 2.925714 6.436572 6.363429v179.2c0 3.584 2.852571 6.436571 6.363428 6.436571z"></path>
        </svg>
      </i>
    );
  }
};
