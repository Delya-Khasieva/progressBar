'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Forms', [{
     name_new: 'Деля',
     name_old: 'Адам',
     list_id: 1,
     user_id: 1,
   }])
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Forms', null, {});
    
  }
};
