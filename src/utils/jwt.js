const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const encode = (data) => jwt.sign({ data }, 'secreto', jwtConfig);

const decode = (token) => jwt.decode(token, 'secreto');

module.exports = {
  encode,
  decode
};