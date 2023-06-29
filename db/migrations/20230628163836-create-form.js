'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_new: {
        allowNull:false,
        type: Sequelize.STRING
      },
      name_old: {
        allowNull:false,
        type: Sequelize.STRING
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
      user_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
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
    await queryInterface.dropTable('Forms');
  }
};