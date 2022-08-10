import classNames from "classnames";
export default {
  name: "IconBiaoshuchu",
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
        <svg class="icon svg-icon" id="iconbiaoshuchu" viewBox="0 0 1024 1024">
          <path d="M843.236982 0c21.284495 0 38.473005 17.261653 38.473005 38.619291v463.285202a9.727965 9.727965 0 0 1-1.023996 4.461699l-0.146286 27.209045c-0.146285 5.266267-13.970236 9.58168-30.939318 9.58168H374.831797v448.656684c0 14.409091-3.291417 26.404477-7.679972 29.257038l-1.901708 0.585141h-34.303877a9.654823 9.654823 0 0 1-6.363406 2.340563H74.947154A38.253578 38.253578 0 0 1 36.474149 985.30391V38.619291C36.474149 17.261653 53.662659 0 74.874011 0H843.236982zM298.178357 783.8692H122.928697v153.306882l175.176517-0.073143v-153.233739z m515.216445-177.882793l170.349106 135.313803a9.654823 9.654823 0 0 1 0 15.21366l-170.422248 135.313802a9.58168 9.58168 0 0 1-10.093678 1.023996 9.727965 9.727965 0 0 1-5.412553-8.703969v-91.793957H420.692205a9.654823 9.654823 0 0 1-9.58168-9.654823v-67.583759c0-5.33941 4.315413-9.654823 9.58168-9.654822h377.050082V613.66638c0-3.65713 2.121135-7.094832 5.412552-8.703969a9.58168 9.58168 0 0 1 10.166821 1.023996zM122.782412 541.986636V706.557477h175.24966V543.156917H138.581212c-5.778265 0-11.117675-0.438856-15.652515-1.243424z m175.761658-247.295117H122.928697v172.616526c4.534841-0.877711 9.87425-1.316567 15.652515-1.389709h159.45086V304.053771c0-3.291417 0.219428-6.436548 0.58514-9.508537z m496.638226 0H629.075461V465.918336h166.179978V294.618376z m-242.906561 0H374.392942c0.29257 2.925704 0.438856 6.143978 0.438855 9.508537V465.918336h177.517081V294.618376z m242.833418-207.65183h-672.180456l-0.073143 130.340106H795.182296V86.966547z"></path>
        </svg>
      </i>
    );
  }
};
