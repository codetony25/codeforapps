import path from 'path';
const babel = require('babel-core');
import {
  readFile,
  writeFile,
  copyFile,
  readDirectory,
  createDirectory
} from './utils/fs';

// Compile server-side application from the source files.
async function compileServer() {

  // Retrieve an array of all the files with the given extensions
  const srcDirectory = await readDirectory('**/*.{jsx,js,json}', {
    cwd: 'src',
    nosort: true,
    dot: false,

    // These are the files we do NOT want to include on client side
    ignore: [
      'client.js',
      'public/*',
      '**/*.client.js',
      '**/*.test.js'
    ]
  });

  /**
   * Maps over our source directory and creates a place for our
   * compiled files inside the `build` folder. This is because
   * we want our re-compile time fast and we do not want to use
   * babel-node when running our server as it is not meant for
   * that because of performance reasons.
   */
  await Promise.all(srcDirectory.map(async (fileName) => {
    const from = path.resolve('src', fileName);
    const to = path.resolve('build', fileName);
    const fileExtension = path.extname(fileName);
    await createDirectory(path.dirname(to));

    if (fileExtension === '.js' || fileExtension === '.jsx') {
      const code = await readFile(from);

      /**
       * More options can be found here:
       * https://babeljs.io/docs/usage/options/
       */
      const result = babel.transform(code, {
        filename: fileName,
        filenameRelative: from,
        moduleRoot: __dirname,
        sourceMaps: 'inline',
        minified: true,
        babelrc: true,
        comments: false
      });

      // write code result inside of the `src file` to `build file`
      return await writeFile(to, result.code);
    }

    // copy `src file` to `build` folder
    return await copyFile(from, to);
  }));
}

export default compileServer;
