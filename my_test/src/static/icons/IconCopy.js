import classNames from "classnames";
export default {
  name: "IconCopy",
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
        <svg class="icon svg-icon" id="iconcopy" viewBox="0 0 1024 1024">
          <path d="M840.874667 85.333333c51.754667 0 94.122667 40.192 97.578666 91.093334l0.213334 6.698666v495.232a97.792 97.792 0 0 1-91.093334 97.536l-6.698666 0.213334H776.106667v64.768a97.792 97.792 0 0 1-91.050667 97.578666l-6.698667 0.213334H183.125333a97.792 97.792 0 0 1-97.578666-91.093334L85.333333 840.874667V345.642667c0-51.754667 40.192-94.122667 91.093334-97.536l6.698666-0.213334 64.725334-0.042666V183.125333c0-51.754667 40.234667-94.122667 91.093333-97.578666L345.642667 85.333333h495.232z m-162.56 243.797334H183.168a16.512 16.512 0 0 0-16.213333 13.226666l-0.298667 3.285334v495.232c0 7.978667 5.632 14.634667 13.184 16.213333l3.328 0.298667h495.232a16.512 16.512 0 0 0 16.170667-13.184l0.341333-3.328V345.642667a16.512 16.512 0 0 0-13.226667-16.170667l-3.285333-0.341333z m162.56-162.56H345.642667a16.512 16.512 0 0 0-16.170667 13.226666l-0.341333 3.328v64.725334h349.226666c51.754667 0 94.122667 40.234667 97.536 91.093333l0.213334 6.698667v349.184h64.768a16.512 16.512 0 0 0 16.213333-13.141334l0.298667-3.328V183.125333a16.512 16.512 0 0 0-13.184-16.213333l-3.328-0.298667z"></path>
        </svg>
      </i>
    );
  }
};