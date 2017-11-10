import webpack from 'webpack'
import express from 'express'
import path from 'path'
import chalk from 'chalk'
import browserSync from 'browser-sync'
import webpackConf from '../webpack/webpack.dev.config'
import openBrowser from 'react-dev-utils/openBrowser'
import {
  prepareUrls,
} from 'react-dev-utils/WebpackDevServerUtils'
import { logInfo } from "../util";
import { stat } from 'fs';




const isDebug = !process.argv.includes('--release');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'
const isInteractive = process.stdout.isTTY

function extractBundles(stats) {
  // Stats has modules, single bundle
  if (stats.modules) return [stats];

  // Stats has children, multiple bundles
  if (stats.children && stats.children.length) return stats.children;

  // Not sure, assume single
  return [stats];
}

function buildModuleMap(modules) {
  var map = {};
  modules.forEach(function(module) {
    map[module.id] = module.name;
  });
  return map;
}

function createCompilationPromise(name, compiler, config) {
  return new Promise((resolve, reject) => {

    let timeStart = new Date();

    compiler.plugin('compile', () => {
      logInfo(chalk.cyan(`Compiling '${name}'...`))
    });

    compiler.plugin('done', stats => {
      // const statsJson = stats.toJson({ errorDetails: false })

      // const statsArr = extractBundles(statsJson)

      // statsArr.forEach(st => {
      //   console.log(chalk.yellow('name:'), st.name)
      //   console.log(chalk.yellow('time:'), st.time)
      //   console.log(chalk.yellow('hash:'), st.hash)
      //   console.log(chalk.yellow('warnings:'), st.warnings)
      //   console.log(chalk.yellow('errors:'), st.errors)
      //   console.log(chalk.yellow('modules:'), buildModuleMap(st.modules))

      // })

      // console.info(stats.toString(config.stats));
      const timeEnd = new Date();
      const time = timeEnd.getTime() - timeStart.getTime();
      if (stats.hasErrors()) {
        logInfo(` Failed to compile '${name}' after ${time} ms`)
        reject(new Error('Compilation failed!'));
      } else {
        logInfo(` Finished '${name}' compilation after ${time} ms`)
        resolve(stats);
      }
    });

  })
}

async function start() {
  const server = express();
  const compiler = webpack(webpackConf)
  const { watchOptions = {}, watch = false } = webpackConf
  const bs = browserSync.create()

  const handle = (err, stats) => {
    
    const statsJson = stats.toJson({ errorDetails: false })

    const statsArr = extractBundles(statsJson)

    statsArr.forEach(st => {
      console.log(chalk.yellow('name:'), st.name)
      console.log(chalk.yellow('time:'), st.time)
      console.log(chalk.yellow('hash:'), st.hash)
      console.log(chalk.yellow('warnings:'), st.warnings)
      console.log(chalk.yellow('errors:'), st.errors)
      console.log(chalk.yellow('modules:'), buildModuleMap(st.modules))

    })
  }

  if (watch) {
    compiler.watch(webpackConf, handle)
  } else {
    compiler.run(handle)
  }

  // server.use(express.static(path.resolve(process.cwd(), './public')));

  await createCompilationPromise('client', compiler, webpackConf);

  // server.listen(DEFAULT_PORT, HOST, err => {
  //   if (err) {
  //     return console.info(chalk.red(err));
  //   }
  //   console.log(chalk.cyan('Starting the development server...\n'));
  //   const urls = prepareUrls('http', HOST, DEFAULT_PORT);
  //   openBrowser(urls.localUrlForBrowser);
  // })

  await new Promise((resolve, reject) =>
    bs.init(
      {
        watchOptions: {
          ignoreInitial: true,
        },
        server: {
          baseDir: "public",
          index: "index.html",
        },
        // middleware: [server],
        open: !process.argv.includes('--silent'),
      },
      (error, bs) => (error ? reject(error) : resolve(bs)),
    ),
  );
  return server
}

export default start;


