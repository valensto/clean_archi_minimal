const { Response } = require('../../frameworks/common');

module.exports = (dependencies) => {
  const { ingredientUseCase } = dependencies.useCases;

  return async (req, res, next) => {
    try {
      const { body = {} } = req;
      const { name, description, quantity, provider } = body;
      const response = await ingredientUseCase(dependencies).add({
        name,
        description,
        quantity,
        provider,
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
