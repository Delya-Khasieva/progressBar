'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lists', [{
      title: 'Чек-лист на первый день',
      user_id: 1
     
      },
      

   
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lists', null, {});
  }
};
