const express = require('express');
const productsRouter = require('./products');
const ingredientsRouter = require('./ingredients');

module.exports = (dependencies) => {
  const routes = express.Router();

  const products = productsRouter(dependencies);
  const ingredients = ingredientsRouter(dependencies);

  routes.use('/products', products);
  routes.use('/ingredients', ingredients);

  return routes;
};
