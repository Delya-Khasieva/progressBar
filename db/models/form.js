'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,List,FormAnswer}) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(List, { foreignKey: 'list_id' });
      this.hasMany(FormAnswer, { foreignKey: 'form_id' });
    }
  }
  Form.init({
    name_new: DataTypes.STRING,
    name_old: DataTypes.STRING,
    list_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};