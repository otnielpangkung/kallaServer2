'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaItem: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mutu: {
        allowNull: false,
        type: Sequelize.STRING
      },

      stdPasir: {
        type: Sequelize.DECIMAL
      },
      UserId: {
        type: Sequelize.DECIMAL
      },
      stdSemen: {
        type: Sequelize.DECIMAL
      },
      stdCpping: {
        type: Sequelize.DECIMAL
      },
      stdSplit: {
        type: Sequelize.DECIMAL
      },
      stdAir: {
        type: Sequelize.DECIMAL
      },
      stdAdditive: {
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
    await queryInterface.dropTable('Items');
  }
};