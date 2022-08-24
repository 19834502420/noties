import classNames from "classnames";
export default {
  name: "IconGPcunchuguocheng",
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
          id="iconGPcunchuguocheng"
          viewBox="0 0 1024 1024"
        >
          <path d="M1016.173714 825.344L891.611429 83.163429C884.882286 37.156571 847.725714 1.974857 802.157714 0H221.915429c-46.372571 1.974857-84.114286 38.326857-89.965715 85.430857L7.826286 825.344a155.501714 155.501714 0 0 0-7.826286 46.957714C0 955.977143 65.462857 1024 146.285714 1024h731.428572c80.749714 0 146.285714-67.949714 146.285714-151.698286 0-16.530286-3.145143-32.109714-7.826286-46.957714zM197.339429 70.436571h629.321142l109.714286 664.649143a140.873143 140.873143 0 0 0-48.201143-9.069714H135.826286c-16.969143 0-32.987429 3.657143-48.128 9.069714l109.714285-664.649143z m684.763428 884.004572H141.897143c-40.740571 0-73.947429-39.862857-73.947429-82.139429 0-42.349714 33.206857-76.8 73.947429-76.8h740.205714c40.740571 0 73.947429 34.450286 73.947429 76.8 0 42.276571-33.206857 82.139429-73.947429 82.139429zM402.285714 531.017143h219.428572c40.374857 0 73.142857-33.938286 73.142857-75.849143s-32.768-75.849143-73.142857-75.849143c0-62.829714-49.078857-113.737143-109.714286-113.737143s-109.714286 50.907429-109.714286 113.737143c-40.374857 0-73.142857 33.938286-73.142857 75.849143s32.768 75.849143 73.142857 75.849143z"></path>
        </svg>
      </i>
    );
  }
};