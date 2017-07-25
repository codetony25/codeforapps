const format = (time) => {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
};

const run = (func, options) => {
  const task = typeof func.default === 'undefined' ? func : func.default;
  const start = new Date();
  console.log(
    `[${format(start)}] Starting '${task.name}${options ?
      `(${options})` : ''}'...`
  );

  return task(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(
      `[${format(end)}] Finished '${task.name}${options ?
        `(${options})` : ''}' after ${time} ms`
    );
  });
};

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
  delete require.cache[__filename];

  const module = require(`./${process.argv[2]}.js`).default;

  run(module).catch(error => console.error(error.stack));
}

export default run;
