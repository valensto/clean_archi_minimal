const addProductController = require('./add');
const deleteProductController = require('./delete');
const getProductByIdController = require('./getByid');
const updateProductController = require('./update');

module.exports = (dependencies) => {
  return {
    addProductController: addProductController(dependencies),
    getProductByIdController:
      getProductByIdController(dependencies),
    updateProductController: updateProductController(dependencies),
    deleteProductController: deleteProductController(dependencies),
  };
};
