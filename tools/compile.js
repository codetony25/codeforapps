import run from './run';
import compileClient from './compileClient';
import compileServer from './compileServer';

const compile = () => {
  return Promise.all([
    run(compileClient),
    run(compileServer)
  ]);
};

export default compile;
