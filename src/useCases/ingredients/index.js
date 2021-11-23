const { Ingredient } = require('../../entities');

module.exports = (dependencies) => {
  const { ingredientsRepository } = dependencies;

  if (!ingredientsRepository) {
    throw new Error(
      'ingredientsRepository should be in dependencies'
    );
  }

  const add = ({ name, description, quantity, provider }) => {
    const ingredient = new Ingredient({
      name,
      description,
      quantity,
      provider,
    });

    return ingredientsRepository.add(ingredient);
  };

  const remove = ({ ingredient = {} }) => {
    return ingredientsRepository.delete(ingredient);
  };

  const getById = ({ id }) => {
    return ingredientsRepository.getById(id);
  };

  const update = ({ ingredient }) => {
    return ingredientsRepository.update(ingredient);
  };

  return {
    add,
    remove,
    getById,
    update,
  };
};
