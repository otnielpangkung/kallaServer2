'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedule.hasMany(models.Realisasi)
      Schedule.hasMany(models.NomorWo)
      Schedule.belongsTo(models.Item)
      Schedule.belongsTo(models.Relasi)
      Schedule.belongsTo(models.User)
      // define association here
    }
  };
  Schedule.init({
    RelasiId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    lokasi: DataTypes.STRING,
    volume: DataTypes.DECIMAL,
    tanggal: DataTypes.DATE,
    waktu: DataTypes.STRING,
    ItemId: DataTypes.INTEGER,
    additiveCair: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};