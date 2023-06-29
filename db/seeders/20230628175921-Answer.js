'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [{
      title: 'Наставник выдал мне пропуск',
    question_id: 1
    },
    {
      title: 'Наставник сообщил пароль от Wi-Fi',
    question_id: 1
    },
    {
      title: 'Системный администратор выдал мне ноутбук',
    question_id: 1
    },
    {
      title: 'Системный администратор выдал мне доступы к почте',
    question_id: 1
    },
    {
      title: 'Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии',
    question_id: 1
    },
    {
      title: 'Ты познакомился (-ась) со своим руководителем',
    question_id: 2
      },
    {
      title: 'Ты написал(-а) сообщение в командный чат',
    question_id: 2
    },
    {
      title: 'Напиши имена трех твоих коллег по отделу:',
    question_id: 2
    },
    {
      title: 'Ты отправил (-а)  сканды документы на оформление в отдел кадров',
    question_id: 3
    },
    {
      title: 'Ты подписал (-а) соглашение о коммерческой тайне',
    question_id: 3
    },
    {
      title: 'Получи свою первую задачу у руководителя',
    question_id: 4
    },
    {
      title: 'Создай подпись в почте по корпоративному шаблону',
    question_id: 4
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
