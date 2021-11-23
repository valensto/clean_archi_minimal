const addIngredientController = require('./add');
const deleteIngredientController = require('./delete');
const getIngredientByIdController = require('./getByid');
const updateIngredientController = require('./update');

module.exports = (dependencies) => {
  return {
    addIngredientController: addIngredientController(dependencies),
    getIngredientByIdController:
      getIngredientByIdController(dependencies),
    updateIngredientController:
      updateIngredientController(dependencies),
    deleteIngredientController:
      deleteIngredientController(dependencies),
  };
};
