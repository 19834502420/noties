import classNames from "classnames";
export default {
  name: "IconCube",
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
        <svg class="icon svg-icon" id="iconCUBE" viewBox="0 0 1024 1024">
          <path
            d="M0.001463 255.268571l474.843428 206.848v558.299429c-23.186286-10.24-152.722286-69.485714-388.608-177.810286A149.430857 149.430857 0 0 1 0.001463 706.486857V255.268571z"
            fill="#3E82F7"
          ></path>
          <path
            d="M1021.953463 255.268571v452.754286c0 59.245714-34.377143 112.859429-87.625143 136.704-238.665143 106.715429-369.590857 164.205714-392.777143 172.763429V462.116571l480.402286-206.848z"
            fill="#D9E6FC"
          ></path>
          <path
            d="M991.379749 170.276571L516.53632 371.565714 38.913463 170.422857 405.94432 21.211429A287.158857 287.158857 0 0 1 621.715749 21.065143l369.664 149.211428z"
            fill="#EDCA4A"
          ></path>
        </svg>
      </i>
    );
  }
};
