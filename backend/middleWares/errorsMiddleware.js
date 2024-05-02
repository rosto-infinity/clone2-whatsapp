const notFind = (req, res, next) => {
  const error = new Error(`le lien ${req.originalUrl} est introuvable`);
  res.status(404);
  next(error);
};

const errorHandle = (err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(error);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFind, errorHandle };
