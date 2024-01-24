'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuarios', [{
      nome: 'Alvaro Henrique',
      email: 'alvaro@gmail.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
