'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Realisasis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ScheduleId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      noTm: {
        type: Sequelize.STRING
      },
      kendala: {
        type: Sequelize.STRING
      },
      bongkar: {
        type: Sequelize.STRING
      },
      so: {
        type: Sequelize.STRING
      },
      shipment: {
        type: Sequelize.STRING
      },
      noTiket: {
        type: Sequelize.STRING
      },
      RelasiId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ItemId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NomorWoId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      volume: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      tanggal: {
        allowNull: false,
        type: Sequelize.DATE
      },
      waktuMulai: {
        type: Sequelize.TIME
      },
      waktuSelesai: {
        type: Sequelize.TIME
      },
      driver: {
        type: Sequelize.STRING
      },
      cipping: {
        type: Sequelize.DECIMAL
      },
      split: {
        type: Sequelize.DECIMAL
      },
      pasir: {
        type: Sequelize.DECIMAL
      },
      semen: {
        type: Sequelize.DECIMAL
      },
      additiveCair: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Realisasis');
  }
};