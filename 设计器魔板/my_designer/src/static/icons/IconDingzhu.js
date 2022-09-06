import classNames from "classnames";
export default {
  name: "IconDingzhu",
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
        <svg class="icon svg-icon" id="icondingzhu" viewBox="0 0 1024 1024">
          <path d="M403.237193 73.148291a35.620368 35.620368 0 1 1 0 71.313878H116.299404a47.030588 47.030588 0 0 0-46.518591 47.542585v713.138782c0 26.258136 20.772453 47.542585 46.518591 47.542586h718.112468a47.030588 47.030588 0 0 0 46.518591-47.542586V620.034308c0-17.115331 12.361072-31.378106 28.671836-34.376946L915.965692 585.145365c19.236462 0 34.888943 15.652482 34.888943 34.888943V928.914829c0 52.516271-41.69119 95.085171-93.110325 95.085171H93.113251C41.694116 1024 0.002926 981.4311 0.002926 928.914829V168.233462C0.002926 115.71719 41.694116 73.148291 93.113251 73.148291h310.123942z m103.496551 366.882475l81.188108 80.310398L219.430243 804.572682l287.303501-364.541916zM747.006657 3.589831c6.948532-6.875389 20.99188-3.510837 31.451249 6.948532l234.933515 232.373529c10.459369 10.386226 13.970206 24.356432 6.948531 31.158679l-93.110325-23.039868 5.412541 5.41254-150.746567 194.266319 7.021674 152.64827c-14.043348 10.313084-38.619208 10.313084-52.662556-3.510837L417.353684 284.23737c-17.554185-17.407901-17.554185-38.253496-3.510837-52.077417l154.257404 6.948532 192.949754-152.64827 5.851396 5.851395z"></path>
        </svg>
      </i>
    );
  }
};
