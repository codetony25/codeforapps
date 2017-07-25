import path from 'path';
import fetch from 'node-fetch';
import { writeFile, createDirectory } from './utils/fs';
import runServer from './runServer';

// Enter your paths here which you want to render as static
const routes = [
  '/',
  '/home',
  '/login',
  '/register',
  '/contact',
  '/not-found'
];

async function render() {
  const server = await runServer();
  const result = await Promise.all(routes.map(async route => {
    const url = `http://${server.host}${route}`;
    const dir = path.resolve('build/public', path.dirname(route));
    const name = route.endsWith('/') ?
      'index.html' : `${path.basename(route, '.html')}.html`;
    const dist = `${dir}${name}`;
    const res = await fetch(url);
    const text = await res.text();
    await createDirectory(dir);
    await writeFile(dist, text);

    return `${dist} => ${res.status} ${res.statusText}`;
  }));

  server.kill('SIGTERM');
  console.log(result.join('\n'));
}

export default render;
