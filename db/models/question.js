'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({List,Answer}) {
      this.belongsTo(List, { foreignKey: 'list_id' });
      this.hasMany(Answer, { foreignKey: 'question_id' });
    }
  }
  Question.init({
    title: DataTypes.STRING,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};