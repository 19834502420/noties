"use strict";
const path = require("path");

const cwd = process.cwd();
const rootDir = path.join(cwd, "../../");
module.exports = {
  includes: [path.join(rootDir, "src")],
  excludes: [path.join(rootDir, "src/custom")],
  output: path.join(rootDir, "dist_release")
};
