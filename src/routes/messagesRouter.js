const { Router } = require("express");
const homeRouter = Router();
const messagesController = require("../controllers/messagesController");
const { body } = require("express-validator");
const { messageValidator } = require("../validators/messageValidators");
// better than random function to avoid collisions

homeRouter.get("/", messagesController.getHomePage);

homeRouter.get("/msg/:id", messagesController.getMessageById);

homeRouter.get("/create", messagesController.getMessagesForm);

homeRouter.post("/create", messageValidator, messagesController.createMessage);

module.exports = homeRouter;
