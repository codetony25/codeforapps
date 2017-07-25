import path from 'path';
import loaderUtils from 'loader-utils';
import { createDirectory, writeFile } from './utils/fs';

module.exports = async function loader(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  const callback = this.async();
  const query = loaderUtils.parseQuery(this.query);

  if (query.outputPath) {
    const from = path.relative(this.options.context, this.resourcePath);
    const to = path.resolve(query.outputPath, from);

    await createDirectory(path.dirname(to));
    await writeFile(to, content);
  }

  callback(null, content);
};

module.exports.raw = true;
