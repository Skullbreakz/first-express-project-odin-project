const { validationResult } = require("express-validator");
const MessageNotFoundError = require("../custom errors/messageNotFoundError");
const messagesStorage = require("../storages/messagesStorage");
let idCount = 1;

exports.getHomePage = (req, res) => {
  res.render("index", {
    title: "Messages",
    messages: messagesStorage.getMessages(),
  });
};

exports.getMessageById = (req, res) => {
  const message = messagesStorage.getMessageById(req.params.id);
  if (!message) {
    throw new MessageNotFoundError("Message not found");
  }
  res.render("message-detail", { message, title: "Message Details" });
};

exports.getMessagesForm = (req, res, next) => {
  res.render("create-message", { title: "Create a Message" });
};

exports.createMessage = (req, res) => {
  const errors = validationResult(req);
  const { user, text } = req.body;
  messagesStorage.addMessage({ user, text, date: new Date() });

  if (!errors.isEmpty()) {
    return res.render("create-message", {
      errors: errors.array(),
      title: "Create a Message",
    });
  }
  res.redirect("/");
};
