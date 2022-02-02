'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RelasiId: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      UserId: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      lokasi: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.DECIMAL
      },
      tanggal: {
        allowNull: false,
        type: Sequelize.DATE
      },
      waktu: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ItemId: {
        // allowNull: false,
        type: Sequelize.INTEGER
      },
      additiveCair: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Schedules');
  }
};