const errorsGenerate = require('../utils/errorsGenerate');

module.exports = (schema) => (req, _res, next) => {
  const { error } = schema.validate(req.body);

  if (error) next(errorsGenerate(error.message, 400));

  next();
};