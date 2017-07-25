import { cleanDirectory } from './utils/fs';

// Cleans up the output `build` directory.
const clean = () => {
  return Promise.all([
    cleanDirectory('build/*', {
      nosort: true,
      dot: true,
      ignore: ['build/.git', 'build/public']
    }),
    cleanDirectory('build/public/*', {
      nosort: true,
      dot: true,
      ignore: ['build/public/.git']
    })
  ]);
};

export default clean;
