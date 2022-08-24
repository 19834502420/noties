import classNames from "classnames";
export default {
  name: "IconVisible",
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
        <svg class="icon svg-icon" id="iconvisible" viewBox="0 0 1024 1024">
          <path d="M512 213.333333c114.773333 0 225.450667 52.053333 328.96 137.813334a909.952 909.952 0 0 1 81.408 76.586666l14.506667 15.744 11.904 13.482667 14.250666 16.981333 9.813334 12.544a42.666667 42.666667 0 0 1 3.072 46.336l-3.072 4.693334-9.813334 12.544-14.250666 16.981333-11.946667 13.482667a915.84 915.84 0 0 1-95.914667 92.330666C737.450667 758.613333 626.773333 810.666667 512 810.666667c-114.773333 0-225.450667-52.053333-328.96-137.813334a909.952 909.952 0 0 1-81.408-76.586666l-14.506667-15.744-11.904-13.482667-14.250666-16.981333-9.813334-12.544a42.666667 42.666667 0 0 1-3.072-46.336l3.072-4.693334 9.813334-12.544 14.250666-16.981333 11.946667-13.482667A915.84 915.84 0 0 1 183.04 351.146667C286.549333 265.386667 397.226667 213.333333 512 213.333333z m0 85.333334C420.565333 298.666667 327.082667 342.613333 237.525333 416.853333A824.149333 824.149333 0 0 0 166.4 483.413333l-15.786667 17.109334L140.373333 512l10.154667 11.477333a831.317333 831.317333 0 0 0 86.954667 83.669334C327.125333 681.386667 420.565333 725.333333 512 725.333333s184.917333-43.946667 274.474667-118.186666a824.149333 824.149333 0 0 0 71.125333-66.56l15.786667-17.109334 10.154666-11.477333-10.112-11.477333a831.317333 831.317333 0 0 0-86.954666-83.669334C696.874667 342.613333 603.434667 298.666667 512 298.666667z m0 64a149.333333 149.333333 0 1 1 0 298.666666 149.333333 149.333333 0 0 1 0-298.666666z m0 85.333333a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"></path>
        </svg>
      </i>
    );
  }
};