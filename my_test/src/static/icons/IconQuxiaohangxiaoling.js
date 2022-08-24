import classNames from "classnames";
export default {
  name: "IconQuxiaohangxiaoling",
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
          id="iconquxiaohangxiaoling"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M837.849633 46.518757c51.346176 0 93.037515 41.691339 93.037515 93.110658v210.212121a416.913392 416.913392 0 0 0-232.740073-70.582706 416.913392 416.913392 0 0 0-238.445203 74.459269H74.532412v223.45095h222.573237a416.84025 416.84025 0 0 0-15.213682 74.459269H74.459269v139.702558c0 10.239978 8.338268 18.578246 18.651389 18.578246h201.215568c7.167985 25.965659 16.822821 50.834177 28.525654 74.459269H93.110658C41.691339 884.295248 0 842.603909 0 791.257733V139.702558C0 88.210097 41.691339 46.518757 93.110658 46.518757h744.738975z m0 74.532412H93.110658a18.651389 18.651389 0 0 0-18.651389 18.578246v139.702558H856.501022v-139.702558a18.651389 18.651389 0 0 0-18.578246-18.578246z"
            fill="#000000"
          ></path>
          <path
            d="M73.1427 279.25883h625.004375a416.913392 416.913392 0 0 0-238.445203 74.459269H74.532412v223.45095h222.573237a416.84025 416.84025 0 0 0-15.213682 74.459269H74.459269V731.427004H73.1427V279.25883z m783.285179-0.073143l0.073143 31.012505a417.644819 417.644819 0 0 0-158.353947-30.939362l158.280804-0.073143z"
            fill="#888888"
          ></path>
          <path
            d="M927.595727 462.115581a329.142152 329.142152 0 1 1-465.480146 465.480146 329.142152 329.142152 0 0 1 465.480146-465.480146z m-42.349624 42.349624a269.311423 269.311423 0 0 0-391.313447 369.73635l10.532549 11.044548a269.311423 269.311423 0 0 0 380.780898-380.780898z m-89.234094 253.293171a29.988507 29.988507 0 0 1-42.422767 42.276481L580.606756 626.906085a29.988507 29.988507 0 0 1 42.276481-42.276481l173.128772 173.128772z"
            fill="#000000"
          ></path>
          <path
            d="M462.115581 462.115581a329.142152 329.142152 0 1 0 465.480146 465.480146 329.142152 329.142152 0 0 0-465.480146-465.480146z m42.349624 42.349624a269.311423 269.311423 0 0 1 391.313447 369.73635l-10.532549 11.044548a269.311423 269.311423 0 0 1-380.780898-380.780898z m89.234094 253.293171a29.988507 29.988507 0 0 0 42.422766 42.276481l173.05563-173.128772a29.988507 29.988507 0 0 0-42.276481-42.276481L593.772442 757.758376z"
            fill="#000000"
          ></path>
        </svg>
      </i>
    );
  }
};
