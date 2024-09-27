const { body, validationResult } = require("express-validator");
const MessageNotFoundError = require("../custom errors/messageNotFoundError");

let idCount = 1;

const getHomePageController = (req, res, next) => {
  res.render("index", { messages });
};

const getMessageByIdController = (req, res, next) => {
  const user = messages.find((m) => m.id === parseInt(req.params.id));
  if (!user) {
    throw new MessageNotFoundError("Message not found");
  }
  res.render("message-detail", { user });
};

const getCreateUserFormController = (req, res, next) => {
  res.render("create-user");
};

const newMessageController = (req, res, next) => {
  const errors = validationResult(req);
  const { user, text } = req.body;
  id = ++idCount;
  messages.push({
    // id: Math.random().toFixed() * 100000,
    id,
    user,
    text,
    added: new Date(),
  });
  if (!errors.isEmpty()) {
    return res.render("create-user", { errors: errors.array() });
  }
  res.redirect("/");
};

const messages = [
  {
    id: idCount,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
];

module.exports = {
  newMessageController,
  getHomePageController,
  getMessageByIdController,
  getCreateUserFormController,
};
