'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lists', [{
      name1: 'Деля',
      name2: 'Адам',
      user_id: 1,
    },
      

   
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lists', null, {});
  }
};
