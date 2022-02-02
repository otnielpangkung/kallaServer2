'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Solar.belongsTo(models.Mobil, {
        foreignKey: 'MobilId'
      })
      Solar.belongsTo(models.User)
      // define association here
    }
  };
  Solar.init({
    MobilId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    tanggal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Solar',
  });
  return Solar;
};