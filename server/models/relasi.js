'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Relasi.belongsTo(models.User)
      Relasi.hasMany(models.Schedule)
      Relasi.hasMany(models.NomorWo)
      Relasi.hasMany(models.Realisasi)

      // define association here
    }
  };
  Relasi.init({
    namaRelasi: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relasi',
  });
  return Relasi;
};