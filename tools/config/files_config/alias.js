import {resolve} from 'path';

const srcPath = resolve(process.cwd(), './src');

const alias = {
  'ui-components': `${srcPath}/components/index.js`,
};

export default alias;
