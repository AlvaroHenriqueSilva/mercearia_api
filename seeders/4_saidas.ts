'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('saidas_estoques', [
      {
        quantidade: 5,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 1
      },
      {
        quantidade: 10,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 2
      },
      {
        quantidade: 10,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 3
      },
      {
        quantidade: 15,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 4
      },
      {
        quantidade: 20,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 5
      },
      {
        quantidade: 40,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 6
      },
      {
        quantidade: 50,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 7
      },
      {
        quantidade: 70,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 8
      },
      {
        quantidade: 50,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 9
      },
      {
        quantidade: 35,
        data_saida: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        id_produto: 10
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('saidas_estoques', null, {});
  }
};