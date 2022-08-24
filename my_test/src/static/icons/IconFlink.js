import classNames from "classnames";
export default {
  name: "IconFlink",
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
        <svg class="icon svg-icon" id="iconFlink" viewBox="0 0 1024 1024">
          <path d="M32.841002 1023.997806A32.914145 32.914145 0 0 1 0 991.083661V32.916339A32.914145 32.914145 0 0 1 32.841002 0.002194h957.874752A32.914145 32.914145 0 0 1 1023.995611 32.916339v958.167322a32.987287 32.987287 0 0 1-33.279857 32.914145H32.914145zM68.241993 101.012047v821.829621a32.914145 32.914145 0 0 0 32.841002 32.841002h821.025053a32.914145 32.914145 0 0 0 33.279857-32.914145V101.08519a32.987287 32.987287 0 0 0-33.279857-32.841002H101.082995a32.841002 32.841002 0 0 0-32.767859 32.914144H68.241993z m117.02807 646.580086V276.334724H508.340679v79.725373H280.428512v111.542379h196.753443v79.725373h-196.753443v200.117999H185.196921z m350.352784-0.511998v-467.380854h95.085307v388.240622h236.762414v79.140232H535.69599z"></path>
        </svg>
      </i>
    );
  }
};
