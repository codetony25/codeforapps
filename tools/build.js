import run from './run';
import clean from './clean';
import copy from './copy';
import compile from './compile';
import render from './render';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output `build` folder.
 */
async function build() {
  await run(clean);
  await Promise.all([
    run(copy),
    run(compile)
  ]);

  if (process.argv.includes('--static')) {
    await run(render);
  }
}

export default build;
