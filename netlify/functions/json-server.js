// netlify/functions/json-server.js
import { create, router as _router, defaults } from 'json-server';
import { join } from 'path'; 

const server = create();
const router = _router(join(__dirname, 'db.json'));
const middlewares = defaults();

server.use(middlewares);
server.use(router);

export const handler = server.createHandler();
