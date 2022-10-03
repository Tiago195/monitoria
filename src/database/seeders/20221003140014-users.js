'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Tiago',
        email: 'tiago@gmail.com',
        password: '$2b$05$.rtfemWZjRD4DxC29ak9Uu/dHFDwFi6Bpa/cZFPv/96pP5LfonPKa'
        // senhaMuitoSecreta
      },
      {
        name: 'Abdel',
        email: 'Abdel@gmail.com',
        password: '$2b$05$k/Wa7PotpBJg1X.eB56p6O0fFqfRDdt66tKB03fhOYQOVb18b/a66'
        // senhaMaisSecreta
      },
      {
        name: 'Raphael',
        email: 'Raphael@gmail.com',
        password: '$2b$05$yI9dDV.5fLzdMJQ/j3b3IOjBmdxP8XbPBS3XjacldEsMQODtYYVFa'
        // senhaMaisSecretaDeTodas
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
