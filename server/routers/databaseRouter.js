const databaseRouter = require('express').Router();
const DatabaseController = require('../controller/databaseController');

const authenticate = require('../middleware/authentication');
const AdminAutenticate = require('../middleware/AdminAutenticate');
const managerTamu = require('../middleware/managerTamu');

databaseRouter.post('/relasi', authenticate, DatabaseController.addRelasi);
databaseRouter.post('/schedule', authenticate, DatabaseController.addSchedule);
databaseRouter.delete(
	'/schedule/:id',
	authenticate,
	DatabaseController.deleteSchedule
);

databaseRouter.put(
	'/schedule/:id',
	authenticate,
	DatabaseController.editSchedule
);
databaseRouter.get(
	'/schedule/user',
	authenticate,
	DatabaseController.getScheduleUser
);
databaseRouter.get(
	'/schedule/user/periode',
	authenticate,
	DatabaseController.getSchedulePeriod
);

databaseRouter.get(
	'/relasi/user',
	authenticate,
	DatabaseController.getRelasiUser
);
databaseRouter.get(
	'/relasi/user/periode',
	authenticate,
	DatabaseController.getRelasiPeriod
);
databaseRouter.delete(
	'/relasi/:id',
	authenticate,
	DatabaseController.deleteRelasi
);

databaseRouter.get(
	'/realisasi/user',
	authenticate,
	DatabaseController.getRealisasiUser
);
databaseRouter.put(
	'/realisasi/:id',
	authenticate,
	DatabaseController.editRealisasi
);
databaseRouter.post(
	'/realisasi',
	authenticate,
	DatabaseController.addRealisasi
);
databaseRouter.delete(
	'/realisasi/:id',
	authenticate,
	DatabaseController.deleteRealisasi
);

databaseRouter.get('/nomorwo/user', authenticate, DatabaseController.getUserWo);
databaseRouter.put('/nomorwo/:id', authenticate, DatabaseController.editWo);
databaseRouter.delete(
	'/nomorwo/:id',
	authenticate,
	DatabaseController.deleteWo
);
databaseRouter.post('/nomorwo', authenticate, DatabaseController.addWo);

databaseRouter.get('/item', DatabaseController.getItem);
databaseRouter.get('/item/user', authenticate, DatabaseController.getItemUser);
// databaseRouter.post("/item", authenticate, DatabaseController.addItem)
databaseRouter.put('/item/:id', authenticate, DatabaseController.editItem);

databaseRouter.get(
	'/mobil/user',
	authenticate,
	DatabaseController.getMobilUser
);
databaseRouter.get(
	'/solar/user',
	authenticate,
	DatabaseController.getSolarUser
);
databaseRouter.post('/solar', authenticate, DatabaseController.addSolar);
databaseRouter.post('/mobil', authenticate, DatabaseController.addMobil);
databaseRouter.put('/mobil/:id', authenticate, DatabaseController.editMobil);
databaseRouter.put('/solar/:id', authenticate, DatabaseController.editSolar);
databaseRouter.delete(
	'/solar/:id',
	authenticate,
	DatabaseController.deleteSolar
);

// admin
databaseRouter.get(
	'/allnomorwo',
	managerTamu,
	DatabaseController.getAllnomorWo
);
databaseRouter.get('/schedule', managerTamu, DatabaseController.getAllSchedule);
databaseRouter.get(
	'/realisasi',
	managerTamu,
	DatabaseController.getAllRealisasi
);
databaseRouter.get('/relasi', managerTamu, DatabaseController.getAllRelasi);
databaseRouter.get('/mobil', managerTamu, DatabaseController.getAllMobil);
databaseRouter.get('/solar', managerTamu, DatabaseController.getAllSolar);

module.exports = databaseRouter;
