// routes/usersRouter.js
const { Router } = require("express");
const defaultRouter = Router();
const defaultController = require("../controllers/defaultController");

defaultRouter.get("/", defaultController.getHome);

module.exports = defaultRouter;
