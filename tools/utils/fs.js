import fs from 'fs';
import glob from 'glob';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';

export const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, data) =>
      error ? reject(error) : resolve(data));
});

export const writeFile = (file, contents) =>
  new Promise((resolve, reject) => {
  fs.writeFile(file, contents, 'utf8', error =>
    error ? reject(error) : resolve());
});

export const copyFile = (source, target) => new Promise((resolve, reject) => {
  let cbCalled = false;
  function done(error) {
    if (!cbCalled) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
      cbCalled = true;
    }
  }

  const rd = fs.createReadStream(source);
  rd.on('error', err => done(err));
  const wr = fs.createWriteStream(target);
  wr.on('error', err => done(err));
  wr.on('close', err => done(err));
  rd.pipe(wr);
});

/**
 * Reads the directory and returns an array of files that
 * were found matching the glob with the following pattern
 * provided.
 */
export const readDirectory = (pattern, options) =>
  new Promise((resolve, reject) =>
    glob(pattern, options, (error, result) =>
      error ? reject(error) : resolve(result))
);

// Creates a Directory
export const createDirectory = (name) =>
  new Promise((resolve, reject) => {
    mkdirp(name, error =>
      error ? reject(error) : resolve());
});

// Deletes the directory
export const cleanDirectory = (pattern, options) =>
  new Promise((resolve, reject) =>
    rimraf(pattern, { glob: options }, (error, result) =>
      error ? reject(error) : resolve(result))
);
