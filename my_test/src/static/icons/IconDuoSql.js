import classNames from "classnames";
export default {
  name: "IconDuoSql",
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
        <svg class="icon svg-icon" id="iconduoSQL" viewBox="0 0 1102 1024">
          <path d="M918.843077 0c29.853538 0 54.035692 24.182154 54.035692 53.956923v404.164923h-83.180307V83.259077H84.283077V948.381538h120.595692V1024H54.114462A54.035692 54.035692 0 0 1 0 970.043077V53.956923C0 24.182154 24.182154 0 54.035692 0h864.807385zM789.267692 678.596923c27.175385 30.168615 40.644923 70.025846 40.644923 118.232615 0 35.052308-7.325538 65.693538-21.582769 91.451077l-8.743384 13.705847 10.24 13.705846 14.808615 20.795077 8.113231 11.815384-55.296 48.049231-30.79877-43.795692-3.150769-4.17477-12.366769 4.883693a179.121231 179.121231 0 0 1-58.525538 9.294769c-48.836923 0-88.221538-16.147692-116.736-48.285538-26.939077-30.404923-40.172308-69.710769-40.172308-117.366154 0-48.049231 13.154462-87.355077 40.014769-117.76 28.356923-32.689231 67.505231-48.836923 116.893539-48.836923 48.758154 0 88.064 16.068923 116.65723 48.285538z m-339.495384-24.024615c21.188923 15.596308 34.500923 38.833231 39.699692 68.371692l1.575385 13.075692 1.575384 17.565539H415.113846l-2.835692-12.603077c-3.308308-13.942154-8.900923-23.630769-16.384-29.144616-7.010462-5.356308-19.692308-8.349538-37.966769-8.349538-15.990154 0-27.175385 2.048-34.579693 5.986462-6.301538 3.150769-8.822154 7.404308-8.822154 15.438769 0 6.065231 3.229538 10.712615 11.736616 15.281231 4.332308 2.284308 17.171692 7.089231 36.470154 13.390769l36.864 11.815384c24.576 8.270769 42.377846 15.438769 52.539077 21.188923 29.932308 17.801846 45.686154 43.638154 45.686153 76.169847 0 30.956308-12.603077 56.398769-37.179076 74.515692-23.473231 17.014154-55.689846 25.284923-95.389539 25.284923-38.754462 0-69.947077-7.640615-92.868923-23.473231-25.521231-17.880615-40.723692-44.662154-45.371077-79.399384l-1.260308-13.39077-0.866461-17.092923h78.139077l2.048 13.705846c2.678154 18.195692 8.585846 30.011077 16.856615 36.233847 8.428308 5.986462 22.921846 9.452308 43.323077 9.452307 18.274462 0 32.689231-2.993231 41.905231-8.11323 7.876923-4.804923 10.791385-9.137231 10.791384-14.966154 0-8.428308-5.277538-15.36-18.116923-21.819077l-11.657846-4.489846-78.296615-25.442462a231.975385 231.975385 0 0 1-34.107077-14.020923 79.872 79.872 0 0 1-41.117539-71.995077c0-31.113846 13.469538-56.241231 39.384616-73.491692 23.079385-16.147692 51.830154-23.945846 86.331077-23.945846 37.494154 0 67.426462 7.876923 89.481846 24.260923z m496.403692 229.612307H1102.769231v72.704h-235.913846V635.982769h79.399384v248.123077zM615.502769 728.615385c-13.154462 16.147692-19.849846 38.518154-19.849846 68.214153 0 29.380923 6.695385 51.593846 19.849846 67.820308 12.996923 15.911385 31.901538 23.945846 57.186462 23.945846 4.096 0 7.876923-0.236308 11.579077-0.630154l10.555077-1.890461-13.39077-15.36-24.260923-25.836308 50.884923-49.230769 11.34277 11.972923 21.582769 23.315692 3.780923 4.411077 2.678154-10.948923c0.787692-4.174769 1.339077-8.664615 1.575384-13.233231l0.708923-14.336c0-30.247385-7.010462-53.405538-20.164923-69.632-12.839385-15.36-31.192615-22.843077-56.871384-22.843076-25.284923 0-43.795692 8.034462-57.186462 24.260923z m-47.970461-189.676308h-351.31077V447.409231h351.31077v91.608615z m189.124923-323.347692v91.05723H216.142769V215.591385h540.514462z"></path>
        </svg>
      </i>
    );
  }
};