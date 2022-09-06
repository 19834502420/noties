import classNames from "classnames";
export default {
  name: "IconShujuyanzheng",
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
          id="iconshujuyanzheng"
          viewBox="0 0 1024 1024"
        >
          <path d="M369.664 239.2064a34.304 34.304 0 0 1 0 68.096H170.496v546.2016H716.8V654.336a33.792 33.792 0 0 1 10.0352-23.8592 32.768 32.768 0 0 1 24.1664-10.0352 34.304 34.304 0 0 1 33.8944 33.792v233.1648a32.768 32.768 0 0 1-10.0352 24.1664 33.792 33.792 0 0 1-23.8592 10.0352H136.6016A34.2016 34.2016 0 0 1 102.4 887.3984v-614.4a33.792 33.792 0 0 1 10.0352-23.7568 32.768 32.768 0 0 1 24.1664-10.0352z m517.5296-136.6016c18.8416 0 34.2016 15.36 34.2016 34.2016v500.3264a34.2016 34.2016 0 1 1-68.096 0V170.7008H386.8672a34.2016 34.2016 0 1 1 0-68.096zM683.008 368.4352l7.168 1.024c11.4688 3.6864 20.48 12.6976 24.1664 24.2688a35.0208 35.0208 0 0 1-8.9088 33.0752L485.376 645.7344a33.792 33.792 0 0 1-48.0256 0L316.8256 523.264a34.2016 34.2016 0 0 1 0-48.4352 34.2016 34.2016 0 0 1 49.152 0l97.4848 98.7136 193.536-195.072a35.0208 35.0208 0 0 1 33.28-8.9088z"></path>
        </svg>
      </i>
    );
  }
};
