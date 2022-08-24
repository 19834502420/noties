import classNames from "classnames";
export default {
  name: "IconPictureUploadFailed",
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
          id="iconpicture-upload-failed"
          viewBox="0 0 1365 1024"
        >
          <path d="M512 0l-28.444444 85.333333h-398.222223V682.666667l110.364445-110.364445a85.333333 85.333333 0 0 1 112.64-7.054222l8.078222 7.054222L426.666667 682.666667l158.037333-189.724445L768 768 682.666667 1024H85.333333a85.333333 85.333333 0 0 1-84.764444-75.377778L0 938.666667v-853.333334A85.333333 85.333333 0 0 1 75.377778 0.568889L85.333333 0H512z m768 0c43.804444 0 79.815111 32.881778 84.764444 75.377778L1365.333333 85.333333v853.333334a85.333333 85.333333 0 0 1-75.377777 84.764444L1280 1024H853.333333l85.333334-256-259.185778-388.778667 109.226667-131.015111a85.276444 85.276444 0 0 1 123.107555-8.419555l7.224889 7.509333 360.96 421.091556V85.333333h-625.777778L682.666667 0h597.333333zM384 170.666667c23.893333 0 46.193778 6.485333 65.251556 17.806222L426.666667 256l69.575111 104.277333A128 128 0 1 1 384 170.666667z"></path>
        </svg>
      </i>
    );
  }
};
