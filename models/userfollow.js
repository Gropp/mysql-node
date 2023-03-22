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
  UserFollow.init({
    userid: DataTypes.INTEGER,
    userFollowid: DataTypes.INTEGER
  }, {
    sequelize,
    // se nao colocar o tableName, sequelize utiliza o modelName e coloca um s no final. Tem que verificar o nome da tabela na migration e no BD
    modelName: 'UserFollow',
    tableName: 'UserFollows'
  });
  return UserFollow;
};