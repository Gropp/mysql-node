'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFollow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // definido na tabela user.js
    }
  }
  UserFollow.init({}, {
    sequelize,
    modelName: 'UserFollow',
  });
  return UserFollow;
};