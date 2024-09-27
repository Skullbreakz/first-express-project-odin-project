const { validationResult } = require("express-validator");
const MessageNotFoundError = require("../custom errors/messageNotFoundError");

let idCount = 1;

exports.getHomePage = (req, res, next) => {
  res.render("index", { title: "Messages", messages });
};

exports.getMessageById = (req, res, next) => {
  const message = messages.find((m) => m.id === parseInt(req.params.id));
  if (!message) {
    throw new MessageNotFoundError("Message not found");
  }
  res.render("message-detail", { message, title: "Message Details" });
};

exports.getUserForm = (req, res, next) => {
  res.render("create-message", { title: "Create a Message" });
};

exports.createMessage = (req, res, next) => {
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
    return res.render("create-message", {
      errors: errors.array(),
      title: "Create a Message",
    });
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
