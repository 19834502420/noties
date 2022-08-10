import classNames from "classnames";
export default {
  name: "IconHDesignerUltraWidescreen",
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
          id="iconh-designer-ultra-widescreen"
          viewBox="0 0 1092 1024"
        >
          <path d="M1031.236267 0H54.272A58.368 58.368 0 0 0 0 54.272v651.264a58.368 58.368 0 0 0 54.272 54.272H325.632c0 43.008-11.6736 85.333333-33.928533 122.197333a67.857067 67.857067 0 0 0-13.5168 61.0304 50.858667 50.858667 0 0 0 47.445333 33.928534h434.176a50.858667 50.858667 0 0 0 47.5136-33.928534 67.857067 67.857067 0 0 0-6.826667-61.098666 248.968533 248.968533 0 0 1-33.860266-128.887467h271.36a58.368 58.368 0 0 0 54.272-54.272V47.5136A75.298133 75.298133 0 0 0 1031.236267 0zM413.832533 868.352c8.669867-35.771733 15.428267-72.021333 20.343467-108.544h223.914667c1.501867 37.000533 8.3968 73.591467 20.343466 108.544H413.832533zM108.544 651.264V339.285333h868.352V651.264H108.544zM976.896 230.741333H108.544V108.544h868.352V230.741333z"></path>
        </svg>
      </i>
    );
  }
};
