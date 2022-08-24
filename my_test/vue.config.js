/* eslint-disable no-console */
const path = require("path");

let productionFlag = process.env.NODE_ENV === "production";
let _publicPath = productionFlag
  ? typeof process.env.publicPath === "undefined"
    ? ""
    : process.env.publicPath
  : "";

function resolve(dir) {
  return path.join(__dirname, dir);
}

function getPublicPath(isRt, assetsDir) {
  if (isRt) {
    if (!_publicPath) return `./${assetsDir}`;
    if (_publicPath[_publicPath.length - 1] === "/") {
      return _publicPath + assetsDir;
    }
    return _publicPath + `/${assetsDir}`;
  }
  return _publicPath;
}
function getConfig() {
  if (process.argv.includes("--designer-rt")) {
    return {
      publicPath: getPublicPath(true, "designer_rt_dist"),
      outputDir: "dist/designer_rt_dist",
      indexPath: "../designer_rt.html",
      needMonaco: false
    };
  } else if (process.argv.includes("--designer-rt-dev")) {
    return {
      publicPath: getPublicPath(),
      outputDir: "dist",
      indexPath: "index.html",
      needMonaco: false
    };
  } else if (process.argv.includes("--dashboard-rt")) {
    return {
      publicPath: getPublicPath(true, "dashboard_rt_dist"),
      outputDir: "dist/dashboard_rt_dist",
      indexPath: "../dashboard_rt.html",
      needMonaco: false
    };
  } else {
    return {
      publicPath: getPublicPath(),
      outputDir: "dist",
      indexPath: "index.html",
      needMonaco: true
    };
  }
}

const { outputDir, indexPath, needMonaco, publicPath } = getConfig();

console.log(`productionFlag=${productionFlag}`);
console.log(`publicPath=${publicPath}`);
console.log(`outputDir=${outputDir}`);
console.log(`indexPath=${indexPath}`);
console.log(`needMonaco=${needMonaco}`);

let maxChunks = 20;

module.exports = {
  publicPath,
  runtimeCompiler: !productionFlag,
  outputDir,
  indexPath,
  productionSourceMap: false,
  configureWebpack: config => {
    if (productionFlag) {
      //
    } else {
      config.devtool = "source-map";
    }
  },
  lintOnSave: !productionFlag,
  chainWebpack: config => {
    const compileLoaderOptions = {
      isDesignTime: true // 此处必须是静态，不能是变量，暂时没找到原因。通过命令行替换文件内容的方式来解决。不要直接修改此处代码
    };
    config.module
      .rule("js-conditional-compile-loader")
      .test(/\.(vue|html|jsx?)$/)
      .pre()
      .use("js-conditional-compile-loader")
      .loader("js-conditional-compile-loader")
      .options(compileLoaderOptions)
      .end();
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      config.module
        .rule("source-map-loader")
        .test(/\.js$/)
        .pre()
        .use("source-map-loader")
        .loader("source-map-loader")
        .end();
    }
    if (process.env.use_analyzer) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
    config
      .plugin("moment-locales-webpack-plugin")
      .use(require("moment-locales-webpack-plugin"), [
        { localesToKeep: ["zh-cn"] }
      ]);

    if (needMonaco) {
      config
        .plugin("monaco-editor-webpack-plugin")
        .use(require("monaco-editor-webpack-plugin"), [
          {
            languages: ["javascript", "css", "html"]
          }
        ]);
    }

    config.module
      .rule("html-loader")
      .test(/\.html$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
    config.module.rule("images").test(/.(jpe?g|png|gif|ico)$/);
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
    if (productionFlag) {
      let cacheGroups = {
        YnP1: {
          name: "vendor-ynp1",
          test: /[\\/]node_modules[\\/]_?yn-p1/,
          priority: 90
        },
        AntDesign: {
          name: "vendor-antd",
          test: /[\\/]node_modules[\\/]_?ant-design-vue/,
          priority: 90
        },
        Echarts: {
          name: "vendor-echarts",
          test: /[\\/]node_modules[\\/]_?echarts/,
          priority: 90
        },
        default: {
          minChunks: 2,
          priority: -20
        }
      };

      if (process.argv.includes("--designer-rt")) {
        maxChunks = 5;
        cacheGroups.HandsonTable = {
          name: "vendor-handsontable",
          test: /[\\/]node_modules[\\/]_?handsontable/,
          priority: 90
        };
        cacheGroups.Vant = {
          name: "vendor-vant",
          test: /[\\/]node_modules[\\/]_?vant/,
          priority: 90
        };
      }

      config.optimization.splitChunks({
        maxSize: 700000,
        minSize: 300000,
        maxInitialRequests: 6,
        chunks: "all",
        cacheGroups
      });

      config
        .plugin("LimitChunkCountPlugin")
        .use(require.resolve("webpack/lib/optimize/LimitChunkCountPlugin.js"), [
          {
            maxChunks,
            minChunkSize: 10000
          }
        ]);
    }
  },
  transpileDependencies: [
    "ant-design-vue",
    "vue-echarts",
    "resize-detector",
    "quill"
  ],
  css: {
    loaderOptions: {
      less: {
        modifyVars: require(resolve("src/themes/themeLoader")),
        javascriptEnabled: true
      }
    }
  }
};
