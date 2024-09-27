const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routes/defaultRouter");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(homeRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err.message);
});

app.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT}`)
);
