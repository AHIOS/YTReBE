/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
// const server = app.listen(port);


const express = require('@feathersjs/express');
const mainApp = express().use('/api/v1', app);
mainApp.use('/', express.static(app.get('public')));
const server = mainApp.listen(port);
app.setup(server);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
