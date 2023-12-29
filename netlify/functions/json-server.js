// netlify/functions/json-server.js
import { create, defaults } from 'json-server';
import path from 'path';

const server = create();
const middlewares = defaults();

const dataFile = path.join(__dirname, 'db.json');

// Apply middleware directly
server.use(middlewares);

// Define routes directly
server.get('/.netlify/functions/json-server/*', (req, res) => {
  req.url = `/${dataFile}${req.url}`;
  server.router(req, res);
});

exports.handler = server.router;
