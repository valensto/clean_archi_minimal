const { Response, ResponseError } = require('../common');

module.exports = (err, req, res, next) => {
  const error = new ResponseError({
    status: err.status || 500,
    content: err.content || err.message || '',
    url: req.originalUrl,
    ip: req.ip,
  });

  res.status(error.status);
  res.json(
    new Response({
      status: false,
      error,
    })
  );
};
