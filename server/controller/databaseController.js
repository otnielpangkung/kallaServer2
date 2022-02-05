const { Item, Relasi, NomorWo, Realisasi, User, Schedule, Mobil, Solar } = require("../models")
const { Op } = require("sequelize")
let moment = require("moment")

class DatabaseController {
    // Add
    static addRelasi(req, res) {
        Relasi.create({
            namaRelasi: req.body.namaRelasi,
            UserId: req.loggedUser.id,
            alamat: req.body.alamat,
            type: req.body.type,

        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static async addManyRealisasi(req, res) {
        // console.log(req.loggedUser.id, "teeeees");
        let aco = req.body
        // console.log(aco, "==========");
        try {

            let result = await aco.forEach(element => {
                NomorWo.findOne({
                    where: {
                        id: element.NomorWoId
                    }
                })
                    .then(data => {
                        let payload = {
                            ScheduleId: data.ScheduleId,
                            NomorWoId: data.id,
                            noTm: element.noTm,
                            RelasiId: data.RelasiId,
                            ItemId: data.ItemId,
                            tanggal: data.tanggal,
                            UserId: req.loggedUser.id,
                            kendala: element.kendala,
                            so: element.so,
                            shipment: element.shipment,
                            bongkar: element.bongkar,
                            noTiket: element.noTiket,
                            volume: +element.volume,
                            waktuMulai: element.waktuMulai,
                            waktuSelesai: element.waktuSelesai,
                            driver: element.driver,
                            cipping: +element.cipping,
                            split: +element.split,
                            pasir: +element.pasir,
                            semen: +element.semen,
                            additiveCair: +element.additiveCair,
                        }
                        Realisasi.create(payload)
                    })
            })
            res.status(200).json(result)
        }
        catch (err) {
            res.status(404).json()
        }


    }

    static addRealisasi(req, res) {
        // console.log(req.loggedUser.id, "===================");
        NomorWo.findOne({
            where: {
                id: req.body.NomorWoId
            }
        })
            .then(data => {
                let payload = {
                    ScheduleId: data.ScheduleId,
                    NomorWoId: data.id,
                    noTm: req.body.noTm,
                    RelasiId: data.RelasiId,
                    ItemId: data.ItemId,
                    tanggal: data.tanggal,
                    UserId: req.loggedUser.id,
                    kendala: req.body.kendala,
                    so: req.body.so,
                    shipment: req.body.shipment,
                    bongkar: req.body.bongkar,
                    noTiket: req.body.noTiket,
                    volume: +req.body.volume,
                    waktuMulai: req.body.waktuMulai,
                    waktuSelesai: req.body.waktuSelesai,
                    driver: req.body.driver,
                    cipping: +req.body.cipping,
                    split: +req.body.split,
                    pasir: +req.body.pasir,
                    semen: +req.body.semen,
                    additiveCair: +req.body.additiveCair,
                }

                // console.log(payload, "===================");


                return Realisasi.create(
                    payload
                )

            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static editRealisasi(req, res) {
        NomorWo.findOne({
            where: {
                id: req.body.NomorWoId
            }
        })
            .then(data => {
                let payload = {
                    ScheduleId: data.ScheduleId,
                    NomorWoId: data.id,
                    noTm: req.body.noTm,
                    RelasiId: data.RelasiId,
                    ItemId: data.ItemId,
                    tanggal: data.tanggal,
                    UserId: req.loggedUser.id,

                    kendala: req.body.kendala,
                    so: req.body.so,
                    shipment: req.body.shipment,
                    bongkar: req.body.bongkar,
                    noTiket: req.body.noTiket,
                    volume: +req.body.volume,
                    waktuMulai: req.body.waktuMulai,
                    waktuSelesai: req.body.waktuSelesai,
                    driver: req.body.driver,
                    cipping: +req.body.cipping,
                    split: +req.body.split,
                    pasir: +req.body.pasir,
                    semen: +req.body.semen,
                    additiveCair: +req.body.additiveCair,
                }

                return Realisasi.update(
                    payload, {
                    where: {
                        id: req.params.id
                    }
                })

            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }
    static addWo(req, res) {
        Schedule.findOne({
            where: {
                id: req.body.ScheduleId
            }
        })
            .then(data => {
                return NomorWo.create({
                    namaWo: req.body.namaWo,
                    tanggal: data.tanggal,
                    UserId: data.UserId,
                    RelasiId: data.RelasiId,
                    ScheduleId: data.id,
                    ItemId: data.ItemId

                })


            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }

    static editWo(req, res) {
        Schedule.findOne({
            where: {
                id: req.body.ScheduleId
            }
        })
            .then(data => {
                Realisasi.update({
                    tanggal: data.tanggal,
                    RelasiId: data.RelasiId,
                    ScheduleId: data.id,
                    ItemId: data.ItemId
                }, {
                    where: {
                        NomorWoId: req.params.id
                    }
                })
                NomorWo.update({
                    namaWo: req.body.namaWo,
                    tanggal: data.tanggal,
                    RelasiId: data.RelasiId,
                    ScheduleId: data.id,
                    ItemId: data.ItemId
                }, {
                    where: {
                        id: req.params.id,
                        UserId: req.loggedUser.id
                    }

                })
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static deleteWo(req, res) {
        NomorWo.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                return Realisasi.destroy({
                    where: {
                        NomorWoId: req.params.id
                    }
                })
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getUserWo(req, res) {

        NomorWo.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Relasi, Realisasi, User, Schedule, Item],
            order: [["tanggal", "desc"]],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getAllnomorWo(req, res) {
        NomorWo.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Relasi, Realisasi, User, Schedule, Item],

        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static addSchedule(req, res) {
        Schedule.create({
            RelasiId: req.body.RelasiId,
            UserId: req.loggedUser.id,
            lokasi: req.body.lokasi,
            volume: req.body.volume,
            tanggal: req.body.tanggal,
            waktu: req.body.waktu,
            ItemId: req.body.ItemId

        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static editSchedule(req, res) {

        Realisasi.update({
            tanggal: req.body.tanggal,
            RelasiId: req.body.RelasiId,
            ItemId: req.body.ItemId,
            tanggal: req.body.tanggal,
        }, {
            where: {
                ScheduleId: req.params.id
            }
        })
            .then(data => {
                return Schedule.update({
                    RelasiId: req.body.RelasiId,
                    lokasi: req.body.lokasi,
                    volume: req.body.volume,
                    tanggal: req.body.tanggal,
                    waktu: req.body.waktu,
                    ItemId: req.body.ItemId

                }, {
                    where: {
                        UserId: req.loggedUser.id,
                        id: req.params.id
                    }
                })

            })
            .then(data => {
                return NomorWo.update({
                    tanggal: req.body.tanggal,
                    RelasiId: req.body.RelasiId,
                    ItemId: req.body.ItemId,

                }, {
                    where: {
                        ScheduleId: req.params.id
                    }
                })
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static addItem(req, res) {
        Item.create({
            namaItem: req.body.namaItem,
            mutu: req.body.mutu,
            stdPasir: req.body.stdPasir,
            stdSemen: req.body.stdSemen,
            stdCpping: req.body.stdCpping,
            stdSplit: req.body.stdSplit,
            stdAir: req.body.stdAir,
            stdAdditive: req.body.stdAdditive,
            UserId: req.loggedUser.id
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static editItem(req, res) {
        Item.update({
            namaItem: req.body.namaItem,
            mutu: req.body.mutu,
            stdPasir: req.body.stdPasir,
            stdSemen: req.body.stdSemen,
            stdCpping: req.body.stdCpping,
            stdSplit: req.body.stdSplit,
            stdAir: req.body.stdAir,
            stdAdditive: req.body.stdAdditive,
            UserId: req.loggedUser.id
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getRelasiUser(req, res) {
        Relasi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Schedule, Realisasi],
            order: [["id", "ASC"]],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }
    static getRelasiPeriod(req, res) {
        let formatStartDate = moment(req.query.startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss')
        let formatEndDate = moment(req.query.endDate).endOf('day').format('YYYY-MM-DD HH:mm:ss')

        Relasi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Schedule, Realisasi],
            where: {
                UserId: req.loggedUser.id,
                tanggal: {
                    [Op.gte]: formatStartDate,
                    [Op.lte]: formatEndDate,
                }
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }
    static getRealisasiUser(req, res) {
        Realisasi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Schedule, Relasi, Item, NomorWo],
            order: [["tanggal", "desc"]],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }
    static deleteSchedule(req, res) {
        Realisasi.destroy({
            where: {
                ScheduleId: req.params.id,
                UserId: req.loggedUser.id,
            }
        })
            .then(data => {
                return Schedule.destroy({
                    where: {
                        UserId: req.loggedUser.id,
                        id: req.params.id
                    }
                })

            })
            .then(data => {
                return NomorWo.destroy({
                    where: {
                        ScheduleId: req.params.id,
                        UserId: req.loggedUser.id,
                    }
                })
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static deleteRelasi(req, res) {
        Realisasi.destroy({
            where: {
                RelasiId: req.params.id,
                UserId: req.loggedUser.id,
            }
        })
            .then(data => {
                return Schedule.destroy({
                    where: {
                        UserId: req.loggedUser.id,
                        RelasiId: req.params.id,

                    }
                })

            })
            .then(data => {
                return NomorWo.destroy({
                    where: {
                        RelasiId: req.params.id,
                        UserId: req.loggedUser.id,
                    }
                })
            })
            .then(data => {
                return Relasi.destroy({
                    where: {
                        id: req.params.id,
                        UserId: req.loggedUser.id,
                    }
                })
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getAllSchedule(req, res) {
        Schedule.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Item, Realisasi, Relasi, User],
            order: [["tanggal", "desc"], ["id", "desc"]],

        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getScheduleUser(req, res) {
        Schedule.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset,
            include: [Item, Relasi, Realisasi],
            order: [["tanggal", "desc"], ["id", "desc"]],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getItem(req, res) {
        Item.findAll({


            include: [Realisasi]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getItemUser(req, res) {
        Item.findAll({


            include: [Realisasi],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getAllRealisasi(req, res) {
        Realisasi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset, include: [Schedule, Relasi, User, Item, NomorWo],
            order: [["tanggal", "desc"], ["UserId", "asc"]]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getAllRelasi(req, res) {
        Relasi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset, include: [Schedule, Realisasi, User]
        })
            .then(data => {
                // console.log(data, "=======");
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static deleteRealisasi(req, res) {
        Realisasi.destroy({
            where: {
                id: req.params.id,
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getItem(req, res) {
        Item.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }

    static getSchedulePeriod(req, res) {
        let formatStartDate = moment(req.query.startDate).startOf('day').format('YYYY-MM-DD HH:mm:ss')
        let formatEndDate = moment(req.query.endDate).endOf('day').format('YYYY-MM-DD HH:mm:ss')

        Realisasi.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset, include: [Schedule, Relasi, Item],
            where: {
                UserId: req.loggedUser.id,
                tanggal: {
                    [Op.gte]: formatStartDate,
                    [Op.lte]: formatEndDate,
                }
            }
        })
            .then(data => {
                // console.log(">>>>>>>>>>", data, "=====");
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })

    }

    static getMobilUser(req, res) {
        // console.log("Test--------------")

        Mobil.findAndCountAll({

            offset: req.query.offset,
            include: [Solar],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                // console.log(data, "===============");
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getAllMobil(req, res) {
        Mobil.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset, include: [Solar],

        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static getSolarUser(req, res) {
        Solar.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset, include: [Mobil],
            order: [["tanggal", "ASC"]],
            where: {
                UserId: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static getAllSolar(req, res) {
        Solar.findAndCountAll({
            limit: req.query.limit,
            offset: req.query.offset, include: [Mobil],
            order: [["tanggal", "ASC"]]

        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static addSolar(req, res) {
        Solar.create({
            MobilId: req.body.MobilId,
            jumlah: req.body.jumlah,
            tanggal: req.body.tanggal,
            UserId: req.loggedUser.id,
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }

    static deleteSolar(req, res) {
        Solar.destroy({
            where: {
                id: req.params.id,
                UserId: req.loggedUser.id,
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static editSolar(req, res) {
        Solar.update({
            MobilId: req.body.MobilId,
            jumlah: req.body.jumlah,
            tanggal: req.body.tanggal,
            UserId: req.loggedUser.id,
        }, {
            where: {
                id: req.params.id,
                UserId: req.loggedUser.id,
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static addMobil(req, res) {
        // console.log(req.body.nomorMobil);
        Mobil.create({
            UserId: req.loggedUser.id,
            nomorMobil: req.body.nomorMobil
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }
    static editMobil(req, res) {
        // console.log(req.body.nomorMobil);
        Mobil.update({
            nomorMobil: req.body.nomorMobil
        }, {
            where: {
                UserId: req.loggedUser.id,
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(404).json(err)
            })
    }





}

module.exports = DatabaseController