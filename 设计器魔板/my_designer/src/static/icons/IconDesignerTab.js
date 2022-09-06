import classNames from "classnames";
export default {
  name: "IconDesignerTab",
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
          id="icondesigner-tab"
          viewBox="0 0 1024 1024"
        >
          <path d="M381.366857 72.265143h-256a51.2 51.2 0 0 0-51.2 51.2v777.069714a51.2 51.2 0 0 0 51.2 51.2h773.266286a51.2 51.2 0 0 0 51.2-51.2V395.190857l-0.438857-6.948571a51.2 51.2 0 0 0-50.761143-44.251429l-466.066286-0.073143V123.465143a51.2 51.2 0 0 0-51.2-51.2z m-21.942857 73.069714v271.798857l517.266286-0.073143v461.531429H147.236571V145.334857h212.187429z"></path>
          <path d="M935.204571 92.891429c8.045714 0 14.628571 6.582857 14.628572 14.628571v199.533714a14.628571 14.628571 0 0 1-14.628572 14.628572H474.697143a14.628571 14.628571 0 0 1-14.628572-14.628572V107.52c0-8.045714 6.582857-14.628571 14.628572-14.628571h460.580571z m-58.514285 73.142857H533.065143v82.432h343.478857V166.034286z"></path>
        </svg>
      </i>
    );
  }
};
