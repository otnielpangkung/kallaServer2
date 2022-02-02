'use strict';
const { bcryptPass, cekPass } = require("../helper/bcrypt")
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {

        username: "admin",
        password: bcryptPass("admin"),
        role: "admin",
        namaCabang: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        username: "manager",
        password: bcryptPass("admin"),
        role: "admin",
        namaCabang: "Manager",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        username: "bandara",
        password: bcryptPass("bandara"),
        role: "staff",
        namaCabang: "Bandara Hasanuddin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        username: "kolaka",
        password: bcryptPass("kolaka"),
        role: "staff",
        namaCabang: "Kolaka",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Users', null, {});

  }
};
