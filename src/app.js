const express = require('express');
const app = express();

const dependencies = require('./config/dependencies');
const routes = require('./frameworks/express/routes');
const ErrorHandler = require('./frameworks/express/ErrorHandler');

const API_PREFIX = process.env.API_PREFIX || '/api';
const API_VERSION = process.env.API_VERSION || '/v1';
const PORT = process.env.PORT || 3000;

module.exports = {
  start: () => {
    // Midlewares
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      })
    );
    app.use(ErrorHandler);

    // Routes
    app.use(API_PREFIX + API_VERSION, routes(dependencies));

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  },
};
