/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Lists',
      [
        {
          name1: 'Деля Хасиева',
          name2: 'Лика',
          user_id: 1,
        },
        {
          name1: 'Алексей Стружанов',
          name2: 'Адам',
          user_id: 2,
        },
        {
          name1: 'Иван Петров',
          name2: 'Адам',
          user_id: 1,
        },
        {
          name1: 'Петя Иванов',
          name2: 'Адам',
          user_id: 2,
        },
        {
          name1: 'Степа Гуров',
          name2: 'Юля',
          user_id: 3,
        },
        {
          name1: 'Саша Голиков',
          name2: 'Антон',
          user_id: 1,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lists', null, {});
  },
};
