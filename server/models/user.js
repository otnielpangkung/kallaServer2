'use strict';
const { bcryptPass, cekPass } = require("../helper/bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Relasi)
      User.hasMany(models.Schedule)
      User.hasMany(models.Realisasi)
      User.hasMany(models.Item)
      User.hasMany(models.Mobil)
      User.hasMany(models.Solar)
      User.hasMany(models.NomorWo)
      // define association here
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    namaCabang: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = bcryptPass(user.password)
      }
    }
  });
  return User;
};