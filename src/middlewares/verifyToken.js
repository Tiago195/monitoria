const { decode } = require('../utils/jwt');
const errorGenerate = require('../utils/errorsGenerate');

const verifyToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
    const data = decode(token);
    if (!data) next(errorGenerate('Token not found', 401));

  } catch (error) {
    next(error);
  }

  next();
};

module.exports = verifyToken;