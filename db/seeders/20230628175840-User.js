const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@yandex.ru',
      password: await bcrypt.hash('123', 5),
      isAdmin: true
     
      },

      {
        name: 'hr',
        email: 'hr@yandex.ru',
        password: await bcrypt.hash('123', 5),
        isAdmin: false

      },


   
    ], {});
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
