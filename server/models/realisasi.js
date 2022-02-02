'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Realisasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Realisasi.belongsTo(models.User)
      Realisasi.belongsTo(models.Schedule)
      Realisasi.belongsTo(models.Relasi)
      Realisasi.belongsTo(models.Item)
      Realisasi.belongsTo(models.NomorWo)
      // define association here
    }
  };
  Realisasi.init({
    ScheduleId: DataTypes.INTEGER,
    RelasiId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    so: DataTypes.STRING,
    shipment: DataTypes.STRING,
    noTm: DataTypes.STRING,
    kendala: DataTypes.STRING,
    bongkar: DataTypes.STRING,
    ItemId: DataTypes.INTEGER,
    noTiket: DataTypes.STRING,
    volume: DataTypes.DECIMAL,
    tanggal: DataTypes.DATE,
    waktuMulai: DataTypes.TIME,
    waktuSelesai: DataTypes.TIME,
    driver: DataTypes.STRING,
    cipping: DataTypes.DECIMAL,
    split: DataTypes.DECIMAL,
    pasir: DataTypes.DECIMAL,
    semen: DataTypes.DECIMAL,
    additiveCair: DataTypes.DECIMAL,

  }, {
    sequelize,
    modelName: 'Realisasi',
  });
  return Realisasi;
};