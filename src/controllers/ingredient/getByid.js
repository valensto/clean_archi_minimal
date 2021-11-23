const { Response } = require('../../frameworks/common');

module.exports = (dependencies) => {
  const { ingredientUseCase } = dependencies.useCases;

  return async (req, res, next) => {
    try {
      const { params = {} } = req;
      const { id } = params;
      const response = await ingredientUseCase(
        dependencies
      ).getById({
        id,
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
