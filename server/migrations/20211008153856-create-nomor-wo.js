'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NomorWos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaWo: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      tanggal: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ScheduleId: {
        allowNull: false,

        type: Sequelize.INTEGER
      },
      ItemId: {
        allowNull: false,

        type: Sequelize.INTEGER
      },
      UserId: {

        allowNull: false,
        type: Sequelize.INTEGER
      },
      RelasiId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('NomorWos');
  }
};