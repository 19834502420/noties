import classNames from "classnames";
export default {
  name: "IconKeshihuaSparkzuoye",
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
          id="iconkeshihuaSparkzuoye"
          viewBox="0 0 1024 1024"
        >
          <path d="M887.808 0C963.072 0 1024 60.928 1024 136.630857v750.738286A136.630857 136.630857 0 0 1 887.296 1024H136.704A137.069714 137.069714 0 0 1 0 886.857143V136.630857C0 60.928 60.928 0 136.704 0h751.104zM136.704 68.022857a68.022857 68.022857 0 0 0-68.096 68.096v750.738286c0 37.888 30.72 68.022857 68.096 68.022857h751.104a68.022857 68.022857 0 0 0 68.096-68.022857V136.630857a68.022857 68.022857 0 0 0-68.096-68.022857H136.704V68.022857zM614.4 204.8v204.653714h-68.096v68.022857h204.8v136.704h68.096v204.653715H614.4V614.107429h68.096v-68.022858H341.504v68.022858H409.6v204.653714H204.8V614.107429h68.096V477.476571h204.8v-68.022857H409.6v-204.8h204.8zM340.992 682.130286h-68.096v68.022857h68.096v-68.022857z m409.6 0h-68.096v68.022857h68.096v-68.022857z m-204.8-409.380572h-68.096v68.022857h68.096v-68.022857z"></path>
        </svg>
      </i>
    );
  }
};
