import classNames from "classnames";
export default {
  name: "IconHDesigneBacklog",
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
          id="iconh-designe-backlog"
          viewBox="0 0 1024 1024"
        >
          <path d="M972.600469 256.024957h-51.194753a48.123067 48.123067 0 0 0-51.194752 51.194753 48.123067 48.123067 0 0 0 51.194752 51.194753h51.194753a48.123067 48.123067 0 0 0 51.194752-51.194753 48.123067 48.123067 0 0 0-51.194752-51.194753zM870.262158 409.55802a48.123067 48.123067 0 0 0-51.194752 51.194753v97.27003A665.378199 665.378199 0 0 0 460.755333 460.752773a665.378199 665.378199 0 0 0-358.260878 97.27003V204.830205H563.144838a48.123067 48.123067 0 0 0 51.194752-51.194753 48.123067 48.123067 0 0 0-51.194752-51.194752H51.299702a48.123067 48.123067 0 0 0-51.194752 51.194752v818.962457a48.123067 48.123067 0 0 0 51.194752 51.194752h818.962456a48.123067 48.123067 0 0 0 51.194753-51.194752V460.752773a48.123067 48.123067 0 0 0-51.194753-51.194753z m-51.194752 511.845136H102.494455v-235.444667A536.418617 536.418617 0 0 1 460.755333 563.091083c130.034671-1.433453 256.536905 41.979697 358.312073 122.867406v235.495862zM716.729096 153.686647a48.123067 48.123067 0 0 0 51.143557-51.194752V51.297142a51.194753 51.194753 0 1 0-102.389505 0v51.194753a48.123067 48.123067 0 0 0 51.194753 51.194752zM870.262158 204.8814a46.587225 46.587225 0 0 0 35.836327-15.358426l51.194753-51.194753a51.194753 51.194753 0 0 0 0-71.672653 51.194753 51.194753 0 0 0-71.672654 0l-51.194752 51.194752a51.194753 51.194753 0 0 0 0 71.672654 46.587225 46.587225 0 0 0 35.836326 15.358426z"></path>
          <path d="M716.677901 307.21971m-51.194753 0a51.194753 51.194753 0 1 0 102.389505 0 51.194753 51.194753 0 1 0-102.389505 0Z"></path>
        </svg>
      </i>
    );
  }
};