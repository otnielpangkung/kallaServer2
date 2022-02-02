const { User } = require("../models")
const { bcryptPass, cekPass } = require("../helper/bcrypt")
const { tokenGenerate, cekToken } = require("../helper/token")

class UserController {
    // static login(req, res) {

    static login(req, res) {
        // console.log("masuk login", req.body);
        User.findOne({
            where: {
                username: req.body.username
            }
        })
            .then(data => {
                // console.log("=============");
                if (data) {
                    // console.log(req.body.password, "dataaaaa");

                    let password = cekPass(req.body.password, data.password)
                    if (password) {
                        // console.log("Tesss");
                        let user = { username: data.username, id: data.id, role: data.role, cabang: data.namaCabang }
                        console.log(user, "sasa");
                        let access_token = tokenGenerate(user)
                        res.status(200).json({ id: data.id, username: data.username, cabang: data.namaCabang, role: data.role, access_token: access_token })
                        // res.status(200).json(data)
                    } else {
                        res.status(401).json({ msg: "poaswword/username salah" })
                    }
                } else {
                    res.status(401).json({ msg: "poaswword/username salah" })
                }
            })
            .catch(err => {
                res.status(401).json({ msg: "poaswword/username salah 2" })
            })
    }

    static register(req, res) {
        User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
            namaCabang: req.body.namaCabang

        })
            .then(data => {
                // res.status(200).json({ id: data.id, username: data.username, role: data.role })
                res.status(200).json({ data })
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static changePass(req, res) {
        User.update({
            password: bcryptPass(req.body.password)
        }, {
            where: {
                id: req.loggedUser.id
            }
        })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static resetPass(req, res) {
        console.log(req.params.id, "====================");
        User.update({
            password: bcryptPass("admin")
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }

    static editUser(req, res) {
        console.log(req.body);
        User.update({
            password: bcryptPass(req.body.password),
            role: req.body.role,
            namaCabang: req.body.namaCabang
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }
    static getAllUser(req, res) {
        User.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(401).json(err)
            })
    }


}

module.exports = UserController