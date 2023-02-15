'use strict';
const {
  Model
} = require('sequelize');
const telephone = require('./telephone');
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
      // quando uma pessoa pode ter somente um endereço 1-1 - retorna um objeto
      User.hasOne(models.Address, {foreignKey: 'userid' })
      // quando uma pessoa pode ter varios telefones 1-n - retorna um array
      User.hasMany(models.Telephone, {foreignKey: 'userid'})
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