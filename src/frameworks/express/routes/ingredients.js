const express = require('express');

const { ingredientControllers } = require('../../../controllers');

module.exports = (dependencies) => {
  const router = express.Router();

  const {
    addIngredientController,
    deleteIngredientController,
    getIngredientByIdController,
    updateIngredientController,
  } = ingredientControllers(dependencies);

  router
    .route('/')
    .post(addIngredientController)
    .delete(deleteIngredientController)
    .put(updateIngredientController);
  router.route('/:id').get(getIngredientByIdController);

  return router;
};
