import classNames from "classnames";
export default {
  name: "IconBiao1",
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
        <svg class="icon svg-icon" id="iconbiao1" viewBox="0 0 1024 1024">
          <path
            d="M0 73.130667v877.738666c0 43.861333 29.269333 73.130667 73.130667 73.130667h877.738666c43.861333 0 73.130667-29.269333 73.130667-73.130667V73.130667C1024 29.269333 994.730667 0 950.869333 0H73.130667C29.269333 0 0 29.269333 0 73.130667z m943.530667 248.661333H709.461333V80.469333h234.069334V321.706667z m-555.861334 73.216h548.522667V628.906667H387.669333V395.093333zM314.538667 628.906667H80.469333V395.093333h234.069334V628.906667z m73.130666-307.2V80.469333H628.906667v234.069334H387.669333v7.253333zM314.538667 80.469333v234.069334H80.469333V80.469333h234.069334zM80.469333 702.208h234.069334v241.322667H80.469333V702.293333z m307.2 241.322667V702.293333h548.522667v241.322667H387.669333z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
