'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Items', [
      {
        namaItem: "Spesial",
        UserId: 4,
        mutu: "Mortar",
        stdPasir: 1902,
        stdSemen: 280,

        stdAir: 210,
        stdAdditive: 0.75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Standart",
        UserId: 4,
        mutu: "Mortar",
        stdPasir: 1908,
        stdSemen: 210,

        stdAir: 230,
        stdAdditive: 0.63,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Rigid / Manual",
        UserId: 4,
        mutu: "B - 0",
        stdPasir: 1151,
        stdSemen: 110,
        stdCpping: 362,
        stdSplit: 482,
        stdAir: 170,
        stdAdditive: 0.29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Rigid / Manual",
        UserId: 4,
        mutu: "K-125",
        stdPasir: 1137,
        stdSemen: 140,
        stdCpping: 357,
        stdSplit: 485,
        stdAir: 170,
        stdAdditive: 0.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Manual",
        UserId: 4,
        mutu: "K-175",
        stdPasir: 1019,
        stdSemen: 210,
        stdCpping: 439,
        stdSplit: 477,
        stdAir: 160,
        stdAdditive: 0.56,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-175",
        stdPasir: 1105,
        stdSemen: 220,
        stdCpping: 420,
        stdSplit: 413,
        stdAir: 160,
        stdAdditive: 0.59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-175",
        stdPasir: 1055,
        stdSemen: 220,
        stdCpping: 827,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 0.59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-225",
        stdPasir: 853,
        stdSemen: 260,
        stdCpping: 436,
        stdSplit: 614,
        stdAir: 150,
        stdAdditive: 0.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Manual",
        UserId: 4,
        mutu: "K-225",
        stdPasir: 932,
        stdSemen: 260,
        stdCpping: 488,
        stdSplit: 491,
        stdAir: 150,
        stdAdditive: 0.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-225",
        stdPasir: 1017,
        stdSemen: 270,
        stdCpping: 469,
        stdSplit: 428,
        stdAir: 150,
        stdAdditive: 0.72,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-225",
        stdPasir: 1007,
        stdSemen: 270,
        stdCpping: 852,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 0.72,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-250",
        stdPasir: 822,
        stdSemen: 290,
        stdCpping: 448,
        stdSplit: 640,
        stdAir: 150,
        stdAdditive: 0.78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 4,
        mutu: "K-250",
        stdPasir: 881,
        stdSemen: 290,
        stdCpping: 534,
        stdSplit: 502,
        stdAir: 150,
        stdAdditive: 0.78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-250",
        stdPasir: 955,
        stdSemen: 300,
        stdCpping: 515,
        stdSplit: 448,
        stdAir: 150,
        stdAdditive: 0.8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-250",
        stdPasir: 985,
        stdSemen: 300,
        stdCpping: 849,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 0.8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-275",
        stdPasir: 773,
        stdSemen: 320,
        stdCpping: 476,
        stdSplit: 649,
        stdAir: 150,
        stdAdditive: 0.86,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 4,
        mutu: "K-275",
        stdPasir: 831,
        stdSemen: 320,
        stdCpping: 561,
        stdSplit: 513,
        stdAir: 150,
        stdAdditive: 0.86,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-275",
        stdPasir: 930,
        stdSemen: 340,
        stdCpping: 531,
        stdSplit: 441,
        stdAir: 150,
        stdAdditive: 0.91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-275",
        stdPasir: 958,
        stdSemen: 340,
        stdCpping: 880,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 0.91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-300",
        stdPasir: 715,
        stdSemen: 350,
        stdCpping: 530,
        stdSplit: 666,
        stdAir: 160,
        stdAdditive: 1.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 4,
        mutu: "K-300",
        stdPasir: 791,
        stdSemen: 350,
        stdCpping: 596,
        stdSplit: 533,
        stdAir: 160,
        stdAdditive: 1.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-300",
        stdPasir: 886,
        stdSemen: 370,
        stdCpping: 574,
        stdSplit: 454,
        stdAir: 160,
        stdAdditive: 1.16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-300",
        stdPasir: 933,
        stdSemen: 370,
        stdCpping: 894,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 1.16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-350",
        stdPasir: 684,
        stdSemen: 390,
        stdCpping: 537,
        stdSplit: 687,
        stdAir: 160,
        stdAdditive: 1.22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 4,
        mutu: "K-350",
        stdPasir: 758,
        stdSemen: 390,
        stdCpping: 618,
        stdSplit: 540,
        stdAir: 160,
        stdAdditive: 1.22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-350",
        stdPasir: 825,
        stdSemen: 410,
        stdCpping: 597,
        stdSplit: 494,
        stdAir: 160,
        stdAdditive: 1.28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-350",
        stdPasir: 916,
        stdSemen: 410,
        stdCpping: 915,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 1.28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-400",
        stdPasir: 651,
        stdSemen: 440,
        stdCpping: 541,
        stdSplit: 719,
        stdAir: 160,
        stdAdditive: 1.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 4,
        mutu: "K-400",
        stdPasir: 714,
        stdSemen: 440,
        stdCpping: 628,
        stdSplit: 575,
        stdAir: 160,
        stdAdditive: 1.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-400",
        stdPasir: 788,
        stdSemen: 460,
        stdCpping: 615,
        stdSplit: 507,
        stdAir: 160,
        stdAdditive: 1.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 4,
        mutu: "K-400",
        stdPasir: 860,
        stdSemen: 460,
        stdCpping: 959,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 1.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 4,
        mutu: "K-450",
        stdPasir: 618,
        stdSemen: 490,
        stdCpping: 568,
        stdSplit: 737,
        stdAir: 150,
        stdAdditive: 4.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 4,
        mutu: "K-450",
        stdPasir: 654,
        stdSemen: 490,
        stdCpping: 670,
        stdSplit: 602,
        stdAir: 150,
        stdAdditive: 4.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 4,
        mutu: "K-450",
        stdPasir: 746,
        stdSemen: 510,
        stdCpping: 656,
        stdSplit: 518,
        stdAir: 150,
        stdAdditive: 4.55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-450",
        stdPasir: 799,
        stdSemen: 510,
        stdCpping: 1021,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 4.55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // user 2
      {
        namaItem: "Spesial",
        UserId: 3,
        mutu: "Mortar",
        stdPasir: 1902,
        stdSemen: 280,

        stdAir: 210,
        stdAdditive: 0.75,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Standart",
        UserId: 3,
        mutu: "Mortar",
        stdPasir: 1908,
        stdSemen: 210,

        stdAir: 230,
        stdAdditive: 0.63,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Rigid / Manual",
        UserId: 3,
        mutu: "B - 0",
        stdPasir: 1151,
        stdSemen: 110,
        stdCpping: 362,
        stdSplit: 482,
        stdAir: 170,
        stdAdditive: 0.29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Rigid / Manual",
        UserId: 3,
        mutu: "K-125",
        stdPasir: 1137,
        stdSemen: 140,
        stdCpping: 357,
        stdSplit: 485,
        stdAir: 170,
        stdAdditive: 0.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Manual",
        UserId: 3,
        mutu: "K-175",
        stdPasir: 1019,
        stdSemen: 210,
        stdCpping: 439,
        stdSplit: 477,
        stdAir: 160,
        stdAdditive: 0.56,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-175",
        stdPasir: 1105,
        stdSemen: 220,
        stdCpping: 420,
        stdSplit: 413,
        stdAir: 160,
        stdAdditive: 0.59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-175",
        stdPasir: 1055,
        stdSemen: 220,
        stdCpping: 827,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 0.59,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-225",
        stdPasir: 853,
        stdSemen: 260,
        stdCpping: 436,
        stdSplit: 614,
        stdAir: 150,
        stdAdditive: 0.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        namaItem: "Manual",
        UserId: 3,
        mutu: "K-225",
        stdPasir: 932,
        stdSemen: 260,
        stdCpping: 488,
        stdSplit: 491,
        stdAir: 150,
        stdAdditive: 0.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-225",
        stdPasir: 1017,
        stdSemen: 270,
        stdCpping: 469,
        stdSplit: 428,
        stdAir: 150,
        stdAdditive: 0.72,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-225",
        stdPasir: 1007,
        stdSemen: 270,
        stdCpping: 852,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 0.72,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-250",
        stdPasir: 822,
        stdSemen: 290,
        stdCpping: 448,
        stdSplit: 640,
        stdAir: 150,
        stdAdditive: 0.78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 3,
        mutu: "K-250",
        stdPasir: 881,
        stdSemen: 290,
        stdCpping: 534,
        stdSplit: 502,
        stdAir: 150,
        stdAdditive: 0.78,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-250",
        stdPasir: 955,
        stdSemen: 300,
        stdCpping: 515,
        stdSplit: 448,
        stdAir: 150,
        stdAdditive: 0.8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-250",
        stdPasir: 985,
        stdSemen: 300,
        stdCpping: 849,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 0.8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-275",
        stdPasir: 773,
        stdSemen: 320,
        stdCpping: 476,
        stdSplit: 649,
        stdAir: 150,
        stdAdditive: 0.86,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 3,
        mutu: "K-275",
        stdPasir: 831,
        stdSemen: 320,
        stdCpping: 561,
        stdSplit: 513,
        stdAir: 150,
        stdAdditive: 0.86,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-275",
        stdPasir: 930,
        stdSemen: 340,
        stdCpping: 531,
        stdSplit: 441,
        stdAir: 150,
        stdAdditive: 0.91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-275",
        stdPasir: 958,
        stdSemen: 340,
        stdCpping: 880,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 0.91,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-300",
        stdPasir: 715,
        stdSemen: 350,
        stdCpping: 530,
        stdSplit: 666,
        stdAir: 160,
        stdAdditive: 1.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 3,
        mutu: "K-300",
        stdPasir: 791,
        stdSemen: 350,
        stdCpping: 596,
        stdSplit: 533,
        stdAir: 160,
        stdAdditive: 1.09,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-300",
        stdPasir: 886,
        stdSemen: 370,
        stdCpping: 574,
        stdSplit: 454,
        stdAir: 160,
        stdAdditive: 1.16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-300",
        stdPasir: 933,
        stdSemen: 370,
        stdCpping: 894,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 1.16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-350",
        stdPasir: 684,
        stdSemen: 390,
        stdCpping: 537,
        stdSplit: 687,
        stdAir: 160,
        stdAdditive: 1.22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 3,
        mutu: "K-350",
        stdPasir: 758,
        stdSemen: 390,
        stdCpping: 618,
        stdSplit: 540,
        stdAir: 160,
        stdAdditive: 1.22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-350",
        stdPasir: 825,
        stdSemen: 410,
        stdCpping: 597,
        stdSplit: 494,
        stdAir: 160,
        stdAdditive: 1.28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-350",
        stdPasir: 916,
        stdSemen: 410,
        stdCpping: 915,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 1.28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-400",
        stdPasir: 651,
        stdSemen: 440,
        stdCpping: 541,
        stdSplit: 719,
        stdAir: 160,
        stdAdditive: 1.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 3,
        mutu: "K-400",
        stdPasir: 714,
        stdSemen: 440,
        stdCpping: 628,
        stdSplit: 575,
        stdAir: 160,
        stdAdditive: 1.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-400",
        stdPasir: 788,
        stdSemen: 460,
        stdCpping: 615,
        stdSplit: 507,
        stdAir: 160,
        stdAdditive: 1.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-400",
        stdPasir: 860,
        stdSemen: 460,
        stdCpping: 959,
        stdSplit: 0,
        stdAir: 160,
        stdAdditive: 1.44,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Rigid",
        UserId: 3,
        mutu: "K-450",
        stdPasir: 618,
        stdSemen: 490,
        stdCpping: 568,
        stdSplit: 737,
        stdAir: 150,
        stdAdditive: 4.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Manual",
        UserId: 3,
        mutu: "K-450",
        stdPasir: 654,
        stdSemen: 490,
        stdCpping: 670,
        stdSplit: 602,
        stdAir: 150,
        stdAdditive: 4.38,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Concrete Pump",
        UserId: 3,
        mutu: "K-450",
        stdPasir: 746,
        stdSemen: 510,
        stdCpping: 656,
        stdSplit: 518,
        stdAir: 150,
        stdAdditive: 4.55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        namaItem: "Single Size",
        UserId: 3,
        mutu: "K-450",
        stdPasir: 799,
        stdSemen: 510,
        stdCpping: 1021,
        stdSplit: 0,
        stdAir: 150,
        stdAdditive: 4.55,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Items', null, {});

  }
};
