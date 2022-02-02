'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NomorWo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NomorWo.hasMany(models.Realisasi)
      NomorWo.belongsTo(models.Schedule)
      NomorWo.belongsTo(models.Relasi)
      NomorWo.belongsTo(models.Item)
      NomorWo.belongsTo(models.User)

      // define association here
    }
  };
  NomorWo.init({
    namaWo: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    ScheduleId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    RelasiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NomorWo',
  });
  return NomorWo;
};