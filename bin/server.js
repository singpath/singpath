#!/usr/bin/env node

const finalhandler = require('finalhandler');
const fs = require('fs');
const http2 = require('http2');
const morgan = require('morgan');
const path = require('path');
const serveStatic = require('serve-static');

const www = process.argv.slice(2).pop() || path.join(__dirname, '../src');
const cert = fs.readFileSync(path.join(__dirname, '/localhost.cert'));
const key = fs.readFileSync(path.join(__dirname, '/localhost.key'));
const port = process.env.npm_package_config_port || 8080;

const logger = morgan('dev');
const serve = serveStatic(www, {index: ['index.html']});
const use = (req, resp, middlewares) => {
  middlewares.reverse().reduce((next, handler) => {
    return err => {
      if (err) {
        next(err);
      }

      handler(req, resp, next);
    };
  }, finalhandler(req, resp))();
};

const server = http2.createServer({key, cert}, (req, resp) => use(req, resp, [logger, serve]));

server.listen(port, () => console.log(
  `Dev server listening on https://localhost:${port} (don't forget to use "HTTPS")`
));
