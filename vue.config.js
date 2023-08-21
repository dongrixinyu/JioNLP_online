const { defineConfig } = require("@vue/cli-service");
// const path = require('path');

const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
// const isProduction = process.env.NODE_ENV === 'production';

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config
      .plugin("webpack-bundle-analyzer")
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    // 入口文件
    config.entry.app = ["babel-polyfill", "./src/main.ts"];
    // element-ui自动就挂载在Vue上了，这里不需要写它，在入口文件main.js中也不用再vue.use了
    config.externals = {
      vue: "Vue",
      vuex: "vuex",
      "vue-router": "VueRouter",
    };
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 配置compression-webpack-plugin压缩
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
        // deleteOriginalAssets: true // 删除源文件
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        // minChunkSize: 100
      }),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            // warnings: false,
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            // 去掉注释内容
            comments: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
    ],
  },
});
