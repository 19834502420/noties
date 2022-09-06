module.exports = {
  presets: [
    [
      "@vue/app",
      {
        polyfills: [
          "es6.promise",
          "es6.symbol",
          "es6.string.includes",
          "es7.array.includes"
        ]
      }
    ]
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ],
    [
      "import",
      { libraryName: "vant", libraryDirectory: "es", style: true },
      "vant"
    ]
  ]
};
