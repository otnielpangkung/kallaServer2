const userRouter = require("express").Router()
const UserController = require("../controller/userController")
const authenticate = require("../middleware/authentication")
const AdminAutenticate = require("../middleware/AdminAutenticate")
const userAuthorization = require("../middleware/userAuthorization")
const managerTamu = require("../middleware/managerTamu")


userRouter.post("/login", UserController.login)


userRouter.post("/register", AdminAutenticate, UserController.register)
userRouter.get("/getall", managerTamu, UserController.getAllUser)
userRouter.patch("/resetpass/:id", UserController.resetPass)
userRouter.put("/password", userAuthorization, UserController.changePass)
userRouter.put("/:id", AdminAutenticate, UserController.editUser)

module.exports = userRouter
