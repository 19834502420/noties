import classNames from "classnames";
export default {
  name: "IconIconTest",
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
        <svg class="icon svg-icon" id="iconicon-test" viewBox="0 0 1024 1024">
          <path d="M539.940571 0C380.342857 0 249.856 51.053714 147.163429 154.550857 48.566857 251.172571 0 371.2 0 516.169143c0 154.550857 48.566857 277.357714 147.163429 371.2C242.980571 978.432 373.394286 1024 539.940571 1024c109.714286 0 208.237714-22.089143 297.106286-64.877714 54.345143-26.185143 113.737143-77.092571 178.176-152.868572a36.132571 36.132571 0 0 0-5.558857-52.077714 40.886857 40.886857 0 0 0-54.857143 4.827429c-68.242286 74.020571-121.417143 120.466286-159.451428 139.410285-72.118857 34.523429-158.208 52.443429-255.414858 52.443429-136.045714 0-242.834286-37.302857-320.585142-108.982857-83.382857-75.922286-137.362286-181.686857-137.362286-321.097143 0-126.976 54.052571-235.081143 135.972571-317.878857 83.236571-84.187429 188.708571-125.586286 316.489143-125.586286 119.369143 0 216.502857 34.450286 288.694857 104.886857 66.56 64.804571 99.913143 146.285714 99.913143 244.297143 0 85.504-24.941714 160.036571-74.898286 223.524571C805.083429 703.853714 762.075429 731.428571 718.994286 731.428571c-26.404571 0-38.912-12.434286-38.912-34.523428 0-14.189714 4.096-36.498286 12.288-67.730286l91.355428-334.116571a37.888 37.888 0 0 0-32.182857-47.689143 48.566857 48.566857 0 0 0-53.101714 37.814857l-6.070857 27.794286c-22.235429-69.046857-74.752-86.674286-141.385143-86.674286-83.236571 0-154.038857 35.84-215.113143 110.445714-63.853714 74.532571-94.354286 164.205714-94.354286 266.313143 0 59.392 17.993143 108.982857 54.125715 147.748572 36.059429 38.546286 83.236571 59.245714 141.531428 59.245714 69.412571 0 127.707429-31.670857 174.884572-93.842286 5.558857 60.708571 37.522286 91.136 95.817142 91.136 72.192 0 138.825143-38.692571 199.899429-114.541714 61.074286-80.091429 92.964571-168.374857 92.964571-267.702857 0-118.710857-38.838857-216.722286-116.589714-295.350857C799.524571 42.715429 684.324571 0 539.940571 0z m6.948572 312.905143c27.794286 0 59.977143 1.755429 78.043428 23.844571 15.286857 17.92 33.060571 49.664 33.060572 74.532572 0 8.265143-5.558857 30.354286-13.897143 66.194285l-30.573714 113.152c-11.117714 35.913143-33.28 69.046857-66.56 96.621715-33.353143 27.648-68.022857 41.398857-102.765715 41.398857-34.669714 0-72.192-9.654857-90.258285-31.744-17.993143-22.089143-29.842286-56.539429-29.842286-93.842286 0-81.408 22.528-146.212571 69.705143-204.141714 44.397714-58.002286 93.403429-86.016 153.088-86.016z"></path>
        </svg>
      </i>
    );
  }
};
