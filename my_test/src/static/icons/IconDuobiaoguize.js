import classNames from "classnames";
export default {
  name: "IconDuobiaoguize",
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
          id="iconduobiaoguize"
          viewBox="0 0 1024 1024"
        >
          <path d="M335.488 894.144a24.64 24.64 0 0 1-0.448-4.672c0-14.656 12.8-26.496 28.736-26.496 15.872 0 28.736 11.84 28.736 26.496a24.512 24.512 0 0 1-0.512 4.864v11.52h509.44V244.416h-10.944c-15.872 0-28.672-11.904-28.672-26.496 0-14.592 12.8-26.432 28.672-26.496v-0.512l21.76-0.448c26.24 0 47.744 19.84 47.744 44.096V915.84c0 24.384-21.44 44.16-47.808 44.16h-529.92c-26.368 0-47.232-19.84-47.232-44.16l0.064-21.696h0.384z m373.44-62.592H111.808c-26.368 0-47.808-19.84-47.808-44.096V108.096C64 83.776 85.44 64 111.808 64h597.248c26.368 0 47.808 19.776 47.808 44.096v679.296c-0.128 24.32-21.568 44.16-47.936 44.16z m-586.24-60.16H698.24V117.952c0 0.128 0 0-0.128 0H122.624v653.44zM231.936 255.36h355.584c16.704 0 30.336 12.48 30.336 27.968 0 15.424-13.632 27.968-30.336 27.968H232c-16.768 0-30.336-12.544-30.336-27.968 0-15.488 13.568-27.968 30.336-27.968z m0 131.84h286.208c16.768 0 30.336 12.608 30.336 28.032s-13.632 27.968-30.336 27.968H232c-16.768 0-30.336-12.544-30.336-27.968s13.568-27.968 30.336-27.968z m0 131.968h216.832c16.768 0 30.336 12.544 30.336 27.968 0 15.488-13.568 27.968-30.336 27.968H232c-16.768 0-30.336-12.48-30.336-27.968 0-15.424 13.568-27.968 30.336-27.968z"></path>
        </svg>
      </i>
    );
  }
};