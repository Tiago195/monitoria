const { user } = require('../database/models');
const bc = require('bcrypt');
const errorsGenerate = require('../utils/errorsGenerate');

const get = (req, res) => { };
const getAll = async (req, res) => {
  const users = await user.findAll({ attributes: { exclude: ['password'] } });

  return users;
};
const create = async (newUser) => {
  const userExist = await user.findOne({ where: { email: newUser.email } });

  if (userExist) throw errorsGenerate('Email is already in use', 409);


  const password = await bc.hash(newUser.password, 5);


  const { dataValues: { password: removedPassword, ...response } } = await user.create({ ...newUser, password });

  return response;
};
const update = (req, res) => { };
const destroy = (req, res) => { };

module.exports = {
  get,
  getAll,
  create,
  update,
  destroy,
};