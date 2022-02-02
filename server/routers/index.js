const router = require("express").Router()
const databaseRouter = require("./databaseRouter")
const userRouter = require("./userRouter")

router.use("/user", userRouter)
router.use("/database", databaseRouter)

module.exports = router