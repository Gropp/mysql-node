//no model colocamos as colunas da base de dados que iremos manipular no programa

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //AQUI EU COLOCO AS CHAVES ESTRANGERAS
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {foreignKey: 'userid' })
    }
  }
  Address.init({
    street_avenue: DataTypes.STRING,
    complement: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'Addresses'
  });
  return Address;
};