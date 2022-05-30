'use strict';
const { bcryptPass, cekPass } = require('../helper/bcrypt');
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert('Users', [
			{
				id: 1,
				username: 'admin',
				password:
					'$2a$10$lxN6nZbyOZ7nQ6bvPIPGb.CM0wB11UkQl.olyzLMT/Vvfe5/zEU8C',
				role: 'admin',
				namaCabang: 'Admin',
				createdAt: '2021-10-25 08:42:18.142+07',
				updatedAt: '2021-10-25 08:42:18.142+07',
			},
			{
				id: 2,
				username: 'manager',
				password:
					'$2a$10$kVrM9P.54c/7as15AO/0FOdef1ci0ISZulTODkg/P7OL6Ba7QLzWu',
				role: 'admin',
				namaCabang: 'Manager',
				createdAt: '2021-10-25 08:42:18.296+07',
				updatedAt: '2021-10-25 08:42:18.296+07',
			},
			{
				id: 3,
				username: 'tanjung',
				password:
					'$2a$10$CYbJHy0P38AvkT0CPAK96epVL2p1SbOgtfq3YMwgi3ZQnJwxANZ1G',
				role: 'staff',
				namaCabang: 'Ready Mix Tanjung',
				createdAt: '2021-10-25 08:42:18.428+07',
				updatedAt: '2021-11-01 10:26:19.274+07',
			},
			{
				id: 7,
				username: 'RM_Wolo',
				password:
					'$2a$10$OKCuABz7GAYNVD1j/iYLc.F.Wtm6FAhcKSdXz5omkNtdTiR98afXm',
				role: 'staff',
				namaCabang: 'Ready Mix Wolo',
				createdAt: '2021-11-01 10:30:44.513+07',
				updatedAt: '2021-11-02 08:40:31.901+07',
			},
			{
				id: 11,
				username: 'Manager',
				password:
					'$2a$10$unGUcjS9oEO5G8BjHzYv.eFKigW5o3Q2tiEwfaFIIuBdMUyP6sqiO',
				role: 'admin',
				namaCabang: 'Manager Ready Mix',
				createdAt: '2021-11-17 18:45:09.329+07',
				updatedAt: '2021-11-17 18:46:55.737+07',
			},
			{
				id: 13,
				username: 'Ready Mix',
				password:
					'$2a$10$wdF24f6lxHr4aIF4Kw0cVe75vWjJAIzRUTZkaUFMIc8rWqNZA7aBq',
				role: 'admin',
				namaCabang: 'Tamu',
				createdAt: '2021-11-17 18:54:27.132+07',
				updatedAt: '2021-11-17 18:54:27.132+07',
			},
			{
				id: 8,
				username: 'RM_Barru',
				password:
					'$2a$10$SbhOceDsNlpqCbZ11xVCiufgjgMB4b5QJyStJqaXIIs7pxSYi58VS',
				role: 'staff',
				namaCabang: 'Ready Mix Barru',
				createdAt: '2021-11-01 10:31:31.044+07',
				updatedAt: '2021-12-04 21:08:03.596+07',
			},
			{
				id: 12,
				username: 'Ready Mix',
				password:
					'$2a$10$HscPlbyXOQTIZhOunwUBY.GY0hubcpjMUjtuTrhWTEF4Pt3s8Us9e',
				role: 'tamu',
				namaCabang: 'Tamu',
				createdAt: '2021-11-17 18:52:15.631+07',
				updatedAt: '2021-12-04 21:42:56.967+07',
			},
			{
				id: 10,
				username: 'sasasa',
				password:
					'$2a$10$z8FVGB1MDzdiiX4G8CgSaOSlNlLrhlgNtNsUm7oYLc40bszYrv7my',
				role: 'staff',
				namaCabang: 'sasa',
				createdAt: '2021-11-03 13:50:21.393+07',
				updatedAt: '2021-12-04 21:44:03.104+07',
			},
			{
				id: 4,
				username: 'kolaka',
				password:
					'$2a$10$.8Dk.jY6eTXF1znH05z1Vuxpstz.BUswcrRlT6ZGCOLkZJRlgrfBK',
				role: 'staff',
				namaCabang: 'kolaka',
				createdAt: '2021-10-25 08:42:18.578+07',
				updatedAt: '2021-12-04 21:44:40.321+07',
			},
			{
				id: 5,
				username: 'RM_Kendari',
				password:
					'$2a$10$uTgLkGCE8CzwOOfIBuAdMu39O7jscvySQaT4TTXJBdtp7eLs.7vAy',
				role: 'staff',
				namaCabang: 'Ready Mix Kendari',
				createdAt: '2021-11-01 10:25:53.805+07',
				updatedAt: '2021-12-30 11:27:21.755+07',
			},
			{
				id: 6,
				username: 'RM_Pangkep',
				password:
					'$2a$10$wJjGdq.xEBOuWtVxUzgrOugBq7GJeeNGczlZEjGel0ZHWvx2OF72G',
				role: 'staff',
				namaCabang: 'Ready Mix Pangkep',
				createdAt: '2021-11-01 10:28:16.472+07',
				updatedAt: '2022-01-04 13:04:45.164+07',
			},
			{
				id: 9,
				username: 'RM_Kima',
				password:
					'$2a$10$qhhqXMJc4zBTRz274abFZee/Z3FFUl4t2tUaVytSz/8DoIRqEHZ9C',
				role: 'staff',
				namaCabang: 'Ready Mix Kima',
				createdAt: '2021-11-02 08:41:13.948+07',
				updatedAt: '2022-01-31 07:47:30.452+07',
			},
			{
				id: 14,
				username: 'tamu1',
				password:
					'$2a$10$Kh/VlNhoi24RIMkGfBpYZOZeZx1DPLTsdgAJiPLSHf3OX7Y53ijL2',
				role: 'tamu',
				namaCabang: 'tamu',
				createdAt: '2021-11-17 21:38:06.92+07',
				updatedAt: '2022-02-04 21:37:16.279+07',
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	},
};
