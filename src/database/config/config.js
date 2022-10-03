require('dotenv').config();

module.exports = {
  'development': {
    'username': 'root',
    'password': process.env.PASSWORD || '123456',
    'database': process.env.DATABASE || 'monitoria',
    'host': process.env.HOST || '127.0.0.1',
    'dialect': 'mysql'
  }
};
