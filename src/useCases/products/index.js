const { Product } = require('../../entities');

module.exports = (dependencies) => {
  const { productsRepository } = dependencies;

  if (!productsRepository) {
    throw new Error(
      'productsRepository should be in dependencies'
    );
  }

  const add = ({
    name,
    description,
    cover,
    price,
    ingredients,
  }) => {
    const product = new Product({
      name,
      description,
      cover,
      price,
      ingredients,
    });

    return productsRepository.add(product);
  };

  const remove = (id) => {
    return productsRepository.delete(id);
  };

  const getById = (id) => {
    return productsRepository.getByID(id);
  };

  const update = (product) => {
    return productsRepository.update(product);
  };

  return {
    add,
    remove,
    getById,
    update,
  };
};
