import webpack from 'webpack';
import webpackConf from './webpack.config';
import {staticPublicPath} from './config/config.json';

webpackConf.output.publicPath = staticPublicPath.dev || '/';

const DefinePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"development"',
  },
});

webpackConf.plugins = webpackConf.plugins.concat([DefinePlugin]);

webpack(webpackConf, (err, stats) => {
  if (err) {
    return console.error(err);
  }

  const jsonStats = stats.toJson();
  if (jsonStats.errors.length > 0) {
    return console.error(jsonStats.errors.toString());
  }
  if (jsonStats.warnings.length > 0) {
    return console.error(jsonStats.warnings.toString());
  }
  return null;
});
