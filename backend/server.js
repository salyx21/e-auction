const http = require('http');
const debug = require("debug")("node-angular");
const app = require('./app');

const port = 3000;
app.set('port', port);

const server = http.createServer(app); 

server.listen(port); 

// use npm run start:server