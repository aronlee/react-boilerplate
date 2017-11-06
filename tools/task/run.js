import chalk from 'chalk';
import { logInfo } from "../util";

function run(fn, options) {
  const task = typeof fn.default === 'function' ? fn.default : fn;
  const startTime = new Date();
  const taskName = task.name;
  logInfo(chalk.cyan(`----- start task: ${chalk.green(taskName)} ${options ? `options: ${chalk.green(options)}` : ''}`))

  return task(options).then(result => {
    const endTime = new Date();
    const duration = endTime - startTime;
    logInfo(chalk.cyan(`----- end task: ${chalk.green(taskName)}😉  ,  it tooks: ${chalk.red(duration)}ms`))
    return result;
  })
}

if (require.main === module) {
  const module = require(`./${process.argv[2]}.js`);
  run(module).catch(err => {
    if (err) {
      console.error(err.stack);
    }
    process.exit(1);
  });
}

export default run;