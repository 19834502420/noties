import classNames from "classnames";
export default {
  name: "IconDesignerRecovery",
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
          id="icondesigner-recovery"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M642.4576 585.5232a56.832 56.832 0 1 0 80.384 80.4864l284.4672-284.4672 4.096-4.608 0.512-0.512 1.024-1.2288a66.048 66.048 0 0 0 7.168-12.6976l1.024-3.4816 0.8192-2.56a87.4496 87.4496 0 0 0 0.9216-3.6864l0.512-3.072A57.4464 57.4464 0 0 0 1024 341.4016l-0.2048 5.12A88.3712 88.3712 0 0 0 1024 342.4256V340.2752l-0.2048-3.9936-0.4096-3.3792-0.512-3.072-0.8192-3.584-0.9216-2.6624-1.1264-3.3792a46.4896 46.4896 0 0 0-3.072-6.3488l-1.2288-2.048a54.4768 54.4768 0 0 0-8.3968-10.6496l4.608 5.12a56.1152 56.1152 0 0 0-4.608-5.12L722.944 16.6912a56.832 56.832 0 1 0-80.384 80.4864l187.392 187.2896H284.3648A284.3648 284.3648 0 0 0 0.3072 556.544L0 568.832v398.336a56.9344 56.9344 0 0 0 113.7664 0v-398.336c0-94.208 76.3904-170.5984 170.7008-170.5984h545.28l-187.392 187.392z"
            fill="#4A4A4A"
          ></path>
        </svg>
      </i>
    );
  }
};
