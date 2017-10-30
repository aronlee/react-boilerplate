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

// console.log(require.main === module, process.argv, __filename)
// console.log(cp)


// const ls = cp.spawn('node', ['-v'])

// ls.stdout.on('data', data => {
//   console.log(`stdout: ${data}`);
// })
// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
// ls.on('close', (code) => {
//   console.log(`子进程退出码：${code}`);
// });

// const cmd = cp.exec('node -v', (err, stdout, stderr) => {
//   if (err) {
//     console.error(chalk.red(`exec error: ${error}`));
//     return;
//   }
//   console.log(chalk.green(`stdout: ${stdout}`));
//   console.log(chalk.red(`stderr: ${stderr}`));
// })

function createCompiler(compiler) {
  return new Promise((resolve, reject) => {

    compiler.plugin('invalid', () => {
      // if (isInteractive) {
      //   clearConsole();
      // }
      console.log('Compiling...');
    })

    // compiler.plugin('make', () => {
    //   console.log('making')
    // })

    // compiler.plugin('emit', () => {
    //   console.log('emit')
    // })

    // compiler.plugin("compilation", function(compilation) {
    //   //the main compilation instance
    //   //all subsequent methods are derived from compilation.plugin
    //   console.log(compilation)
    // });

    compiler.plugin('done',  stats => {
      const message = formatWebpackMessages(stats.toJson({}, true))
      console.log(message)
      // if sucessful
      if (message.errors.length < 1 && message.warnings.length < 1) {
        console.log(chalk.green('\n\n\nCompiled successully!'))
        
        resolve()
      } else {
        console.log(chalk.red(message.errors))
        
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

  server.use(express.static(path.resolve(process.cwd(), './public')));

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



// const app = express()

// const compiler = webpack(webpackConf, function(err, stats) {

//   const jsonStats = stats.toJson({}, true)

//   const errors = jsonStats.errors.map(message => {
//     var lines = message.split('\n');
//     console.log(lines)
//     return message
//   })
//   // if(jsonStats.errors.length > 0) {
//   //     return console.log(chalk.red(jsonStats.errors.toString()))
//   // }
//   // if(jsonStats.warnings.length > 0) {
//   //     return console.log(chalk.red(jsonStats.warnings.toString()))
//   // }

//   // if (err || stats.hasErrors() || stats.hasWarnings()) {
//   //   process.exit(1);
//   // } else {
//   //   process.exit(0);
//   // }
// })

// let server;
