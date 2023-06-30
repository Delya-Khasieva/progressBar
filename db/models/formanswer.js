'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({List,Answer}) {
      this.belongsTo(List, { foreignKey: 'list_id' });
      this.belongsTo(Answer, { foreignKey: 'answer_id' });
      
    }
  }
  FormAnswer.init({
    answer_id: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FormAnswer',
  });
  return FormAnswer;
};