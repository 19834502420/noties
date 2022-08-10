import classNames from "classnames";
export default {
  name: "IconBingzhuangtu",
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
          id="iconbingzhuangtu"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M596.5824 0H563.2v460.8h460.8512v-33.8944C1017.3952 189.7472 830.3616 0 596.5824 0z"
            fill="#5B8FF8"
          ></path>
          <path
            d="M512 0v512h512c0 282.7776-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0zM445.44 71.5264l-12.0832 1.9456a445.44 445.44 0 1 0 517.1712 517.1712l1.9456-12.0832H445.44V71.5264z"
            fill="#5D7092"
          ></path>
        </svg>
      </i>
    );
  }
};
