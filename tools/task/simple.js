import webpack from 'webpack'
import webpackConf from '../webpack/webpack.dev.config'
import chalk from 'chalk'

webpack(webpackConf, function(err, stats) {
  if (err) {
      return console.error(err)
  }

  const jsonStats = stats.toJson()
  if(jsonStats.errors.length > 0) {
      return console.log(chalk.red(jsonStats.errors.toString()))
  }
  if(jsonStats.warnings.length > 0) {
      return console.log(chalk.yellow(jsonStats.warnings.toString()))
  }
})