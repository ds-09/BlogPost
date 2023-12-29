// netlify/functions/json-server.js
import { create, defaults } from 'json-server';
import path from 'path';

const server = create();
const middlewares = defaults();

const dataFile = path.join(__dirname, 'db.json');

server.use(middlewares);
server.use('/.netlify/functions/json-server', (req, res, next) => {
  req.url = `/${dataFile}${req.url}`;
  next();
});

export const handler = server.createHandler({
  base: '/.netlify/functions/json-server',
});
