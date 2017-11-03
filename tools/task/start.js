import webpack from 'webpack'
import chalk from 'chalk'
import express from 'express'
// import cp from 'child_process'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConf from '../webpack/webpack.dev.config'
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages'
import openBrowser from 'react-dev-utils/openBrowser'
import {
  // choosePort,
  // createCompiler,
  // prepareProxy,
  prepareUrls,
} from 'react-dev-utils/WebpackDevServerUtils'


const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

function createCompiler(compiler) {
  return new Promise((resolve, reject) => {

    compiler.plugin('invalid', () => {
      // if (isInteractive) {
      //   clearConsole();
      // }
      console.log('Compiling...');
    })

    compiler.plugin('done',  stats => {
      // console.log(chalk.yellow(stats.compilation))
      const message = formatWebpackMessages(stats.toJson({}, true))
      // if sucessful
      if (message.errors.length < 1 && message.warnings.length < 1) {
        console.log(chalk.green('\nCompiled successully!'))
        resolve()
      } else {
        reject(message)
        // console.log(chalk.yellow(message.warnings))
      }
      console.log('Finished compile')
      
    })

  })
}

async function start() {
  const server = express();
  const compiler = webpack(webpackConf);

  // server.use(express.static(path.resolve(process.cwd(), './public')));

  server.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConf.output.publicPath,
    quiet: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      children: false
    },
  }))

  server.use(webpackHotMiddleware(compiler, {
    log: false,
  }))

  server.all('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), './public/index.html'))
  })

  server.listen(DEFAULT_PORT, HOST, err => {
    if (err) {
      return console.log(err);
    }
    console.log(chalk.cyan('Starting the development server...\n'));
    const urls = prepareUrls('http', HOST, DEFAULT_PORT);
    openBrowser(urls.localUrlForBrowser);
  });

  return new Promise((resolve, reject) => {
    createCompiler(compiler).then(() => {
      resolve(1111)
    })
  })
}

export default start;


