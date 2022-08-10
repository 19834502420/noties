"use strict";

const babel = require("gulp-babel");
const gulp = require("gulp");
const gulpif = require("gulp-if");
const htmlmin = require("gulp-htmlmin");
const path = require("path");
const rimraf = require("rimraf");
const releaseConfig = require("./releaseConfig");
const uglifyes = require("gulp-uglify-es").default;
const cwd = process.cwd();
const rootDir = path.join(cwd, "../../");

function isExcludes(file) {
  return releaseConfig.excludes.some(path => file.path.indexOf(path) === 0);
}

function isIncludes(file) {
  return releaseConfig.includes.some(path => file.path.indexOf(path) === 0);
}

exports.release = function() {
  // 先清除output目录
  rimraf.sync(releaseConfig.output);
  return gulp
    .src([
      path.join(rootDir, "**/*"),
      path.join(rootDir, ".*"),
      `!${path.join(rootDir, "node_modules")}`,
      `!${path.join(rootDir, "node_modules/**/*")}`
    ])
    .pipe(
      gulpif(
        function(file) {
          return (
            isIncludes(file) &&
            !isExcludes(file) &&
            /^js$/.test(file.path.split(".")[1])
          );
        },
        babel({
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "transform-vue-jsx"
          ],
          comments: false
        })
      )
    )
    .pipe(
      gulpif(function(file) {
        return (
          isIncludes(file) &&
          !isExcludes(file) &&
          /^js$/.test(file.path.split(".")[1])
        );
      }, uglifyes())
    )
    .pipe(
      gulpif(
        function(file) {
          return (
            isIncludes(file) &&
            !isExcludes(file) &&
            /^vue$|^html$/.test(file.path.split(".")[1])
          );
        },
        htmlmin({
          caseSensitive: true,
          collapseWhitespace: true,
          keepClosingSlash: true,
          minifyJS: true
        })
      )
    )
    .pipe(
      gulpif(
        function(file) {
          return (
            isIncludes(file) &&
            !isExcludes(file) &&
            /^css$/.test(file.path.split(".")[1])
          );
        },
        htmlmin({
          collapseWhitespace: true,
          minifyCSS: true
        })
      )
    )

    .pipe(gulp.dest(releaseConfig.output));
};
