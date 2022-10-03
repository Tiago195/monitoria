const service = require('../services/user.service');

const get = (req, res) => { };
const getAll = async (req, res) => {
  const users = await service.getAll();

  res.status(200).json(users);
};
const create = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await service.create({ name, email, password });

  res.status(200).json(user);
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