import classNames from "classnames";
export default {
  name: "IconShelljiaobenzuoye",
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
          id="iconShelljiaobenzuoye"
          viewBox="0 0 1024 1024"
        >
          <path d="M517.12 718.116571c0 5.558857 4.388571 10.24 9.654857 10.24h236.690286c5.266286 0 9.581714-4.681143 9.581714-10.24v-61.44c0-5.705143-4.315429-10.24-9.508571-10.24H526.701714c-5.266286 0-9.581714 4.608-9.581714 10.24v61.44z m-249.490286 7.753143l245.76-206.116571a10.313143 10.313143 0 0 0 0-15.725714l-245.76-205.897143a10.166857 10.166857 0 0 0-16.822857 7.753143V386.194286c0 2.998857 1.462857 5.851429 3.803429 7.753143L395.044571 512l-140.434285 117.979429a10.313143 10.313143 0 0 0-3.657143 7.826285v80.310857c0 8.704 10.020571 13.458286 16.676571 7.753143zM983.04 0H40.96A40.96 40.96 0 0 0 0 40.96v942.08c0 22.674286 18.285714 40.96 40.96 40.96h942.08c22.674286 0 40.96-18.285714 40.96-40.96V40.96a40.96 40.96 0 0 0-40.96-40.96z m-51.2 931.84H92.16V92.16h839.68v839.68z"></path>
        </svg>
      </i>
    );
  }
};
