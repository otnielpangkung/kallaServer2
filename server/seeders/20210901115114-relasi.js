'use strict';
const { bcryptPass, cekPass } = require("../helper/bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Relasis', [
      {

        namaRelasi: "PT. Adikarya Bandara",
        UserId: 3,
        type: "Proyek",
        alamat: "Kawasan Industri Makassar",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaRelasi: "PT. BCD",
        UserId: 3,
        type: "Proyek",
        alamat: "Jeneponto",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaRelasi: "PT. Sukses Terus",
        type: "Proyek",
        UserId: 3,
        alamat: "Toll Sutami",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Relasis', null, {});

  }
};
