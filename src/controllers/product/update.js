const { Response } = require('../../frameworks/common');

module.exports = (dependencies) => {
  const { productUseCase } = dependencies.useCases;

  return async (req, res, next) => {
    try {
      const { body = {} } = req;
      const { id, name, description, cover, price, ingredients } =
        body;
      const response = await productUseCase(dependencies).update({
        id,
        name,
        description,
        cover,
        price,
        ingredients,
      });

      res.json(
        new Response({
          success: true,
          content: response,
        })
      );

      next();
    } catch (error) {
      next(error);
    }
  };
};
