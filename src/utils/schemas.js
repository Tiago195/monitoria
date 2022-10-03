const joi = require('joi');

const schemaUser = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required()
});

module.exports = {
  schemaUser
};