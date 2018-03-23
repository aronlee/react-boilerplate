
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import baseConfig from './webpack.base.config'
import ExtractIndexPlugin from './plugins/extract-index-plugin'

module.exports = baseConfig({
  watch: true,
  isDebug: true,
  plugins: [
    new CleanWebpackPlugin(['public'], {
      // Absolute path to your webpack root folder (paths appended to this)
      // Default: root of your package
      root: `${process.cwd()}/public`,
      // Write logs to console.
      verbose: false,

      // Use boolean "true" to test/emulate delete. (will not remove files).
      // Default: false - remove files
      dry: false,

      // If true, remove files on recompile.
      // Default: false
      watch: true,

      // Instead of removing whole path recursively,
      // remove all path's content with exclusion of provided immediate children.
      // Good for not removing shared files from build directories.
      exclude: ['.config'],

      // allow the plugin to clean folders outside of the webpack root.
      // Default: false - don't allow clean folder outside of the webpack root
      allowExternal: false
    }),
    // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。对于所有资源，统计资料(stat)的 emitted 标识都是 false。
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: './index.html',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
    new ExtractIndexPlugin({
      opts1: '1'
    }),
    // https://github.com/webpack-contrib/webpack-bundle-analyzer
    // new BundleAnalyzerPlugin(),
  ],
  performance: {
    hints: false,
  },
})
