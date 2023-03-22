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
      // pessoas seguindo n pessoas e sendo seguido por n pessoas
      // seguindo
      User.belongsToMany(User, {through: 'UserFollows', foreignKey: 'userid', as: 'follows'});
      // é seguido
      User.belongsToMany(User, {through: 'UserFollows', foreignKey: 'userFollowid', as:'followed'});
      // como as chaves estao na mesma tabela é preciso usar um alias para diferenciar os campos alem de mudar a referencia da chave estrangeira
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