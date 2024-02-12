const express = require("express");
const router = express();
const userRouter = require("./userRoutes");

router.use("/user", userRouter);

module.exports = router
