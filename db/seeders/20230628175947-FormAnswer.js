'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FormAnswers', [{
      answer_id: 1,
      form_id: 1
    },
    {
      answer_id: 2,
      form_id: 1
    },
    {
      answer_id: 3,
      form_id: 1
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('FormAnswers', null, {});
     
  }
};
