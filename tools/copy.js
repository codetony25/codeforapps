import path from 'path';
import packageJson from '../package.json';
import {
  writeFile,
  copyFile,
  readDirectory,
  createDirectory
} from './utils/fs';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
function copy() {
  return Promise.all([
    createDirectory('build').then(() =>
      writeFile('build/package.json', JSON.stringify({
        private: true,
        engines: packageJson.engines,
        dependencies: packageJson.dependencies,
        scripts: {
          start: 'node server.js'
        }
      }, null, 2))
    ),

    /**
     * Reads the directory in the `public` directory then creates the
     * file in the build directory for only assets.
     */
    readDirectory('**/*.*', {
      cwd: 'src/public',
      nosort: true,
      dot: true
    }).then(dirs =>
      Promise.all(dirs.map(async dir => {
        const from = path.resolve('src/public', dir);
        const to = path.resolve('build/public', dir);
        await createDirectory(path.dirname(to));

        return await copyFile(from, to);
      }))
    )
  ]);
}

export default copy;
