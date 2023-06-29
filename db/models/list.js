'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Question, }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Question, { foreignKey: 'list_id' });
    }
  }
  List.init({
    name1: DataTypes.STRING,
    name2: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};