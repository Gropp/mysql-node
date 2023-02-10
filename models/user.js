'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // esse atributo funciona quando fazemos select no endereço e ele traz a pessoa vinculada
      User.hasOne(models.Address, {foreignKey: 'userid' })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return User;
};