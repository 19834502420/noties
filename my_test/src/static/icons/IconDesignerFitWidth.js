import classNames from "classnames";
export default {
  name: "IconDesignerFitWidth",
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
          id="icondesigner-fit-width"
          viewBox="0 0 1024 1024"
        >
          <path d="M843.93984 77.66016H180.06016a102.4 102.4 0 0 0-102.4 102.4v663.87968a102.4 102.4 0 0 0 102.4 102.4h663.87968a102.4 102.4 0 0 0 102.4-102.4V180.06016a102.4 102.4 0 0 0-102.4-102.4z m-663.87968 40.96h663.87968a61.44 61.44 0 0 1 61.44 61.44v663.87968a61.44 61.44 0 0 1-61.44 61.44H180.06016a61.44 61.44 0 0 1-61.44-61.44V180.06016a61.44 61.44 0 0 1 61.44-61.44z"></path>
          <path d="M0 839.63904h40.96V921.6a61.44 61.44 0 0 0 55.54176 61.15328L102.4 983.04h81.92v40.96h-81.92a102.4 102.4 0 0 1-102.1952-95.68256L0 921.6v-81.96096z m983.04 0.04096h40.96v81.92a102.4 102.4 0 0 1-95.68256 102.1952L921.6 1024h-81.92v-40.96h81.92a61.44 61.44 0 0 0 61.15328-55.54176L983.04 921.6v-81.92zM921.6 0A102.4 102.4 0 0 1 1024 102.4v81.92h-40.96v-81.92a61.44 61.44 0 0 0-55.54176-61.15328L921.6 40.96h-81.92V0z m-737.28 0v40.96h-81.92a61.44 61.44 0 0 0-61.15328 55.54176L40.96 102.4v81.87904H0V102.4A102.4 102.4 0 0 1 95.68256 0.2048L102.4 0h81.92z"></path>
        </svg>
      </i>
    );
  }
};
