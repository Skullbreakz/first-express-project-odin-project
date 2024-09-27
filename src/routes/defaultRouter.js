const { Router } = require("express");
const homeRouter = Router();
const {
  newMessageController,
  getHomePageController,
  getMessageByIdController,
  getCreateUserFormController,
} = require("../controllers/defaultController");
const { body } = require("express-validator");
// better than random function to avoid collisions

homeRouter.get("/", getHomePageController);

homeRouter.get("/message-detail/:id", getMessageByIdController);

homeRouter.get("/new", getCreateUserFormController);

homeRouter.post(
  "/create-user",
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
  newMessageController
);

module.exports = homeRouter;
