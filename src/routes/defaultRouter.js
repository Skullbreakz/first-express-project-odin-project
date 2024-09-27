const { Router } = require("express");
const homeRouter = Router();
const MessageNotFoundError = require("../custom errors/messageNotFoundError");
const { body, validationResult } = require("express-validator");
const {
  newMessageController,
  getHomePageController,
  getMessageByIdController,
  getCreateUserFormController,
} = require("../controllers/defaultController");
// better than random function to avoid collisions

homeRouter.get("/", getHomePageController);

homeRouter.get("/message-detail/:id", getMessageByIdController);

homeRouter.get("/new", getCreateUserFormController);

homeRouter.post("/new", newMessageController);

module.exports = homeRouter;
