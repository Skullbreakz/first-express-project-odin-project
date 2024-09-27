// app
const express = require("express");
const app = express();
const path = require("path");
// routers
const messagesRouter = require("./routes/messagesRouter");
const defaultRouter = require("./routes/defaultRouter");
const usersRouter = require("./routes/usersRouter");

//other
require("dotenv").config();

// set
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// use
app.use(express.urlencoded({ extended: true }));
app.use(defaultRouter);
app.use("/messages", messagesRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT}`)
);
