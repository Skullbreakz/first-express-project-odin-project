const messagesStorage = require("../storages/messagesStorage");
const usersStorage = require("../storages/usersStorage");

exports.getHome = (req, res, next) => {
  res.render("index", {
    title: "Home Page",
    messages: messagesStorage.getMessages(),
    users: usersStorage.getUsers(),
  });
};
