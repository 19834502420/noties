import classNames from "classnames";
export default {
  name: "IconQiehuandaodingyi",
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
          id="iconqiehuandaodingyi"
          viewBox="0 0 1024 1024"
        >
          <path d="M761.772509 483.057839l228.049981-215.981909a115.926626 115.926626 0 0 0 0-164.345192l-56.902785-56.756506A116.877444 116.877444 0 0 0 770.18359 43.926317L547.399676 254.715299 331.052068 24.324844 329.296712 22.569488A76.357979 76.357979 0 0 0 221.488607 22.057509L59.045051 183.989086a75.772861 75.772861 0 0 0-1.316517 105.61391l213.129456 226.952884L69.357767 707.304549a116.219185 116.219185 0 0 0-33.205482 57.780463l-34.083159 144.889998c-6.290025 26.696037 2.194195 54.635451 22.088227 73.432386 19.967173 18.796936 48.418566 25.598939 74.748904 17.846118l140.209048-41.104583c17.772978-5.266068 34.01002-14.627965 47.394608-27.208016l198.72091-188.188775 239.386654 254.819158 1.755356 1.901635a76.357979 76.357979 0 0 0 107.808105 0.438839l162.370416-161.931577a75.772861 75.772861 0 0 0 1.389657-105.61391l-236.241641-251.381586z m-479.065867 350.193492L176.653893 727.7837a37.008752 37.008752 0 0 0-11.482953-7.606542l526.094776-498.228502 110.806838 110.441139c1.682216 1.682216 3.730131 2.486754 5.631767 3.730131l-525.143959 497.204545z m539.259945-735.055262a41.470282 41.470282 0 0 1 57.780463 0.731398l56.829646 56.756506a41.324002 41.324002 0 0 1-0.731398 59.023841l-75.772861 71.75017c-1.462797-2.413614-2.633034-5.046648-4.754089-7.167703l-109.490321-109.051482 76.06542-72.04273z m-575.610439 282.539152a37.520731 37.520731 0 0 0 25.964639-10.897834l56.390806-56.244527a37.374452 37.374452 0 0 0-16.82216-62.680832 37.667011 37.667011 0 0 0-36.350494 9.654457l-56.390807 56.317667a37.081892 37.081892 0 0 0-10.532135 23.697304L112.656544 238.331978c-0.585119-0.585119-0.585119-1.170237-0.365699-1.316517l162.370416-161.931577c0.14628-0.14628 0.804538-0.14628 1.462797 0.511978L492.983645 306.352017l-167.490204 158.567145-79.064153-84.183941zM77.549427 929.430204a1.901636 1.901636 0 0 1-2.340474-2.194195l34.083159-145.036277a41.470282 41.470282 0 0 1 6.216885-13.457728 37.301312 37.301312 0 0 0 7.972242 11.921791l103.785414 103.419716a41.324002 41.324002 0 0 1-9.435037 4.16897l-140.282189 41.177723z m703.385717 19.528333c-0.14628 0.14628-0.804538 0.14628-1.462796-0.438839l-147.669311-157.250628a36.716193 36.716193 0 0 0 16.529601-8.996198l56.463946-56.244527a37.374452 37.374452 0 0 0-16.82216-62.680832 37.667011 37.667011 0 0 0-36.350494 9.654457l-56.463947 56.317667a37.081892 37.081892 0 0 0-8.557359 13.896567l-46.88263-49.954502L707.210198 534.694557l235.729663 251.089026c0.585119 0.585119 0.585119 1.170237 0.438839 1.316517l-162.370416 161.858437z"></path>
        </svg>
      </i>
    );
  }
};