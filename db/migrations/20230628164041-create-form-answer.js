'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FormAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answer_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Answers',
      		key: 'id',
      },
        onDelete: 'CASCADE',
      },
      list_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
      		key: 'id',
      },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FormAnswers');
  }
};