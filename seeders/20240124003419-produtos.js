'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('produtos', [{
      nome_produto: 'Farinha de trigo',
      descricao: 'Farainha para bolos',
      preco_unitario: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('produtos', null, {});
  }
};
