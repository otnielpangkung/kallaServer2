'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mobil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mobil.hasMany(models.Solar, {
        foreignKey: 'MobilId'
      })
      Mobil.belongsTo(models.User)
      // define association here
    }
  };
  Mobil.init({
    UserId: DataTypes.INTEGER,
    nomorMobil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mobil',
  });
  return Mobil;
};