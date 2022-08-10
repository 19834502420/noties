import classNames from "classnames";
export default {
  name: "IconOracle",
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
        <svg class="icon svg-icon" id="iconOracle" viewBox="0 0 1024 1024">
          <path d="M631.588571 0c7.826286 0 15.286857 2.413714 21.577143 7.021714l4.388572 3.657143 245.906285 238.884572a36.498286 36.498286 0 0 1 10.24 20.187428l0.585143 5.851429v177.517714h81.993143a27.794286 27.794286 0 0 1 27.721143 27.794286v338.505143a27.794286 27.794286 0 0 1-27.721143 27.721142H914.285714V987.428571c0 17.700571-12.580571 32.914286-29.988571 35.986286L877.714286 1024H146.285714a36.498286 36.498286 0 0 1-35.986285-29.988571L109.714286 987.428571v-140.288H27.721143A27.794286 27.794286 0 0 1 0 819.419429V480.841143a27.794286 27.794286 0 0 1 27.721143-27.721143H109.714286V36.571429c0-17.700571 12.580571-32.914286 29.988571-35.986286L146.285714 0z m221.842286 847.140571H170.569143v116.004572h682.861714v-116.004572zM132.461714 517.851429c-14.043429 0-26.331429 2.267429-36.864 6.875428a59.099429 59.099429 0 0 0-36.132571 48.274286 556.763429 556.763429 0 0 0-1.755429 53.028571v54.710857c0.219429 19.163429 0.731429 32.914286 1.828572 41.545143a59.611429 59.611429 0 0 0 37.156571 47.981715c10.605714 4.388571 22.601143 6.582857 35.84 6.582857 14.043429 0 26.331429-2.267429 36.864-7.021715a59.099429 59.099429 0 0 0 36.132572-48.274285c1.170286-10.386286 1.755429-28.013714 1.755428-52.955429v-54.564571a406.528 406.528 0 0 0-1.828571-41.618286 59.611429 59.611429 0 0 0-37.156572-47.981714 92.16 92.16 0 0 0-35.84-6.582857z m501.101715 0.146285c-13.970286 0-26.331429 2.413714-37.156572 7.168a61.586286 61.586286 0 0 0-25.234286 19.529143 56.32 56.32 0 0 0-10.971428 25.892572 312.173714 312.173714 0 0 0-1.901714 40.228571v72.630857c0 24.283429 1.974857 42.569143 5.997714 54.710857a49.956571 49.956571 0 0 0 24.429714 28.379429c12.288 6.875429 27.794286 10.313143 46.811429 10.313143 18.285714 0 33.645714-4.022857 46.08-12.141715 12.434286-8.118857 20.48-17.554286 24.137143-28.306285 3.510857-10.678857 5.412571-28.964571 5.412571-54.710857v-9.728H646.582857v31.305142c0 13.604571-0.877714 22.308571-2.267428 26.038858-1.462857 3.657143-4.608 5.558857-9.508572 5.558857-4.973714 0-8.265143-1.901714-9.654857-5.558857-1.462857-3.657143-2.194286-11.483429-2.194286-23.625143V590.262857c0-12.580571 0.731429-20.699429 2.194286-24.576 1.462857-3.803429 4.827429-5.705143 10.166857-5.705143 4.681143 0 7.68 1.609143 9.142857 4.754286 1.462857 2.925714 1.974857 10.825143 1.974857 23.552v43.154286h64.585143V607.817143c0-23.332571-2.048-40.301714-5.851428-51.346286a52.443429 52.443429 0 0 0-24.429715-27.574857 92.16 92.16 0 0 0-47.177142-10.971429z m-356.425143 5.12h-45.714286v248.612572h64.585143V659.748571c8.850286 0 14.262857 1.536 16.384 4.681143 2.194286 3.145143 3.145143 11.410286 3.145143 24.722286v82.578286h59.977143V696.832a180.662857 180.662857 0 0 0-1.462858-27.428571 35.693714 35.693714 0 0 0-8.192-14.628572c-4.388571-5.485714-13.019429-9.654857-25.892571-12.8 14.189714-1.462857 23.625143-5.266286 28.525714-11.995428 4.681143-6.729143 7.094857-19.748571 7.094857-38.985143 0-21.138286-3.291429-36.571429-10.166857-46.299429a42.715429 42.715429 0 0 0-26.404571-17.993143c-10.752-2.413714-31.451429-3.584-61.878857-3.584z m235.300571 0H419.035429l-33.060572 248.466286h66.998857l3.876572-44.690286h23.113143l3.437714 44.617143h66.048l-37.010286-248.393143z m286.427429 0h-64.585143v248.466286h103.862857v-49.737143h-39.277714V523.117714z m162.669714 0h-107.666286v248.466286h111.981715v-49.737143h-47.396572v-54.564571h40.374857v-47.250286h-40.374857v-47.177143h43.154286v-49.737143z m-828.708571 36.864c4.022857 0 6.582857 1.609143 7.899428 4.900572 1.243429 3.145143 1.828571 10.532571 1.828572 22.089143v114.102857c0 14.628571-0.585143 23.917714-1.828572 27.794285-1.316571 3.876571-4.022857 5.851429-8.411428 5.851429-4.315429 0-7.021714-1.609143-8.192-4.973714-1.097143-3.437714-1.682286-12.288-1.682286-26.770286V586.971429c0-12.8 0.877714-20.48 2.706286-23.113143a8.630857 8.630857 0 0 1 7.68-3.876572z m335.433142 18.578286c3.291429 41.472 6.582857 76.141714 9.874286 104.301714h-22.308571c1.755429-21.869714 5.851429-56.685714 12.434285-104.301714z m-172.251428-12.873143c7.387429 0 12.580571 1.170286 15.36 3.730286 2.925714 2.413714 4.388571 7.606857 4.388571 15.433143v13.750857c0 10.971429-1.462857 17.408-4.461714 19.382857-2.998857 2.048-8.045714 2.998857-15.36 2.998857zM551.424 60.854857H170.715429v392.265143h683.008v-104.594286H599.552a47.835429 47.835429 0 0 1-47.542857-40.813714l-0.438857-7.168V82.285714L551.424 60.854857z m63.414857 1.974857v225.060572h237.860572L614.838857 62.829714z"></path>
        </svg>
      </i>
    );
  }
};