const User = (sequelize, datatypes) => {
  const User = sequelize.define('user', {
    name: datatypes.STRING,
    email: datatypes.STRING,
    password: datatypes.STRING
  }, {
    timestamps: false
  });

  return User;
};

module.exports = User;