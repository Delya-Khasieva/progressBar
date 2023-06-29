'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Questions', [{
       title: 'Нужно подготовить твое рабочее место:',
       list_id: 1
     },
     {
       title: 'Важно познакомиться с коллегами:',
       list_id: 1
     },
     {
      title: 'Важно пройти оформление в отделе кадров:',
      list_id: 1
    },
    {
      title: 'А теперь самое время работать:',
      list_id: 1
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {}); 
  }
};
