const { Router } = require("express");
const homeRouter = Router();
const messagesController = require("../controllers/messagesController");
const { body } = require("express-validator");
// better than random function to avoid collisions

homeRouter.get("/", messagesController.getHomePage);

homeRouter.get("/message/:id", messagesController.getMessageById);

homeRouter.get("/create", messagesController.getUserForm);

homeRouter.post(
  "/create",
  [
    body("user")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("user name is required")
      .isLength({ min: 2 })
      .withMessage("user name must be at least 2 characters long"),
    body("text")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Message is required")
      .isLength({ min: 2 })
      .withMessage("Message must be at least 2 characters long"),
  ],
  messagesController.createMessage
);

module.exports = homeRouter;
