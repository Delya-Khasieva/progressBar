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
    static associate({Form,Answer}) {
      this.belongsTo(Form, { foreignKey: 'form_id' });
      this.belongsTo(Answer, { foreignKey: 'answer_id' });
      
    }
  }
  FormAnswer.init({
    answer_id: DataTypes.INTEGER,
    form_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FormAnswer',
  });
  return FormAnswer;
};