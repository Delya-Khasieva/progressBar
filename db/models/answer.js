'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question,FormAnswer}) {
      this.belongsTo(Question, { foreignKey: 'question_id' });
      this.hasMany(FormAnswer, { foreignKey: 'answer_id' });
    }
  }
  Answer.init({
    title: DataTypes.STRING,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};