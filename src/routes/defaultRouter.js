const { Router } = require("express");
const MessageNotFoundError = require("../custom errors/messageNotFoundError");

const homeRouter = Router();

// better than random function to avoid collisions
let idCount = 1;

homeRouter.get("/", (req, res) => {
  res.render("index", { messages });
});

homeRouter.get("/message-detail/:id", (req, res) => {
  const user = messages.find((m) => m.id === parseInt(req.params.id));
  if (!user) {
    throw new MessageNotFoundError("Message not found");
  }
  res.render("message-detail", { user });
});

homeRouter.get("/new", (req, res) => {
  res.render("create-user");
});

homeRouter.post("/new", (req, res) => {
  const { user, text } = req.body;
  id = ++idCount;
  messages.push({
    // id: Math.random().toFixed() * 100000,
    id,
    user,
    text,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = homeRouter;

const messages = [
  {
    id: idCount,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
];
