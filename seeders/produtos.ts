'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('produtos', [{
      nome_produto: 'Papel Higiênico',
      descricao: 'Folha dupla 12 rolos 30 metros',
      preco_unitario: 17.90,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Escova de dente',
      descricao: 'Clareamento whitening',
      preco_unitario: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Amaciante',
      descricao: 'Amaciante concentrado bilho intenso',
      preco_unitario: 26.90,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Pacote de biscoito',
      descricao: 'Biscoito recheado sabor chocolate',
      preco_unitario: 4.49,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Iogurte',
      descricao: 'Iogurte natural 170g',
      preco_unitario: 2.65,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Manteiga',
      descricao: 'Manteiga c/Sal 200g',
      preco_unitario: 8.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Detergente',
      descricao: 'Lava louças líquido 500ml',
      preco_unitario: 3.40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Farinha de mandioca',
      descricao: 'Farinha de mandioca 1kg',
      preco_unitario: 6.98,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Saco de açúcar',
      descricao: 'Açúcar mascavo 1kg',
      preco_unitario: 7.98,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_produto: 'Sabão em pó',
      descricao: 'Sabão em pó brilhante 1.6kg',
      preco_unitario: 14.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('produtos', null, {});
  }
};
