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

const logger = morgan('dev');
const serve = serveStatic(www, {index: ['index.html']});

const server = http2.createServer({key, cert}, (req, resp) => {
  const done = finalhandler(req, resp);

  logger(req, resp, err => {
    if (err) {
      done(err);
    }

    serve(req, resp, done);
  });
});

server.listen(8080);

