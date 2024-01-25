'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('entradas_estoques', [
      {
        quantidade: 25,
        id_produto: 1
      },
      {
        quantidade: 50,
        id_produto: 2
      },
      {
        quantidade: 40,
        id_produto: 3
      },
      {
        quantidade: 50,
        id_produto: 4
      },
      {
        quantidade: 60,
        id_produto: 5
      },
      {
        quantidade: 80,
        id_produto: 6
      },
      {
        quantidade: 100,
        id_produto: 7
      },
      {
        quantidade: 80,
        id_produto: 8
      },
      {
        quantidade: 90,
        id_produto: 9
      },
      {
        quantidade: 150,
        id_produto: 10
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('entradas_estoques', null, {});
  }
};