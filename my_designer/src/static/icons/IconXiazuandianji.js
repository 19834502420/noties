import classNames from "classnames";
export default {
  name: "IconXiazuandianji",
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
          id="iconxiazuandianji"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M785.92 365.714286L1002.057143 458.752c13.165714 4.388571 21.942857 17.627429 21.942857 33.060571 0 15.506286-8.777143 26.477714-21.942857 30.939429L531.748571 692.662857c-4.388571 2.194286-8.777143 2.194286-13.165714 2.194286s-6.582857 0-10.971428-2.194286L24.137143 535.990857c-13.165714-4.388571-21.942857-17.700571-24.137143-30.939428 0-15.36 8.777143-26.477714 19.748571-37.522286l225.353143-100.278857 90.477715 36.864-203.702858 92.16 384.512 125.805714 375.734858-134.656-200.557715-86.089143L785.92 365.714286z"
            fill="#FFFFFF"
          ></path>
          <path
            d="M517.632 773.851429c20.406857 0 36.205714 15.579429 36.205714 35.547428v83.748572l40.740572-39.936a35.986286 35.986286 0 0 1 49.737143 0 34.377143 34.377143 0 0 1 0 48.859428l-106.276572 106.496a36.571429 36.571429 0 0 1-24.868571 11.117714 36.571429 36.571429 0 0 1-24.868572-11.117714L379.611429 902.070857a34.377143 34.377143 0 0 1 0-48.859428c11.264-15.579429 33.938286-15.579429 49.737142-2.194286l52.004572 51.053714v-92.672c0-19.968 15.872-35.547429 36.205714-35.547428z m99.84-624.566858a33.792 33.792 0 0 1 46.153143-17.627428L1002.057143 277.357714c13.165714 4.388571 21.942857 17.627429 21.942857 33.060572 0 15.506286-8.777143 26.477714-21.942857 30.939428L531.748571 511.268571c-4.388571 2.194286-8.777143 2.194286-13.165714 2.194286s-6.582857 0-10.971428-2.194286L24.137143 354.596571c-13.165714-4.388571-21.942857-17.700571-24.137143-30.939428 0-15.36 8.777143-26.477714 19.748571-37.522286L366.957714 131.657143c17.554286-8.777143 39.497143 0 46.153143 17.627428 8.777143 17.700571 0 39.789714-17.554286 46.372572l-263.68 119.222857 384.512 125.805714 375.734858-134.656-257.097143-110.372571c-17.554286-6.582857-26.331429-28.672-17.554286-46.372572zM512 0c20.772571 0 36.937143 15.140571 36.937143 34.523429v287.597714c0 19.456-16.091429 34.523429-36.937143 34.523428-20.772571 0-36.937143-15.067429-36.937143-34.523428V34.523429C475.062857 15.140571 491.154286 0 512 0z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </i>
    );
  }
};