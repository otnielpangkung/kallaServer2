'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.hasMany(models.Schedule)
      Item.hasMany(models.Realisasi)
      Item.hasMany(models.NomorWo)
      Item.belongsTo(models.User)
      // define association here
    }
  };
  Item.init({
    namaItem: DataTypes.STRING,
    mutu: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    stdPasir: DataTypes.DECIMAL,
    stdSemen: DataTypes.DECIMAL,
    stdCpping: DataTypes.DECIMAL,
    stdSplit: DataTypes.DECIMAL,
    stdAir: DataTypes.DECIMAL,
    stdAdditive: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};