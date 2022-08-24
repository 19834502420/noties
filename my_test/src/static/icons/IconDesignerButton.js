import classNames from "classnames";
export default {
  name: "IconDesignerButton",
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
          id="icondesigner-button"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M976.70173 0c23.4661 0 43.006961 18.602217 46.676205 42.921629L1023.975254 51.198763v619.761022c0 25.428719-17.066254 46.590874-39.59371 50.516113l-7.679814 0.68265H882.325344c-21.674143 0-39.337716-19.114205-39.337716-42.665636a41.812323 41.812323 0 0 1 32.340552-41.982985l6.997164-0.68265h62.889147V85.331271H78.760763v533.491107H276.473319c19.284867 0 35.412478 15.188966 38.740397 34.985822l0.597319 7.679814a41.812323 41.812323 0 0 1-32.255221 42.068317l-7.082495 0.68265H47.273524c-23.4661 0-43.006961-18.602217-46.676205-42.92163L0 653.040218V51.198763C0 25.770044 17.066254 4.607889 39.59371 0.68265L47.273524 0h929.428206z"
            fill="#4A4A4A"
          ></path>
          <path
            d="M819.350866 539.03764l6.570508 1.535963a34.132508 34.132508 0 0 1 12.79969 56.318639l-87.037896 87.037896 181.755607 181.92627a34.132508 34.132508 0 0 1 0 48.2975l-99.837587 99.837587-5.290539 4.351895a34.132508 34.132508 0 0 1-42.921629-4.351895L603.121425 831.638569l-89.683166 86.355246a34.132508 34.132508 0 0 1-57.598608-20.564836l-43.518949-372.726993a34.132508 34.132508 0 0 1 38.740397-37.716421l368.289767 52.052075z m-334.071927 21.588812l30.377933 260.345708 64.169116-61.694509 5.37587-4.266564a34.132508 34.132508 0 0 1 42.494973 4.69322l181.840939 181.755608 51.540087-51.454757L679.236918 708.164219l-4.351894-5.37587a34.132508 34.132508 0 0 1 4.266563-42.921629l62.974478-62.889147-256.847126-36.351121z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};