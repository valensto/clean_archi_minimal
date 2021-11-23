const { Response } = require('../../frameworks/common');

module.exports = (dependencies) => {
  const { productUseCase } = dependencies.useCases;

  return async (req, res, next) => {
    try {
      const { params = {} } = req;
      const { id } = params;
      const response = await productUseCase(dependencies).getById(
        id
      );

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
