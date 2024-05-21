const express = require("express");
const app = express();
const PORT = 3000;
require("./model/index");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/register", (req, res) => {
  res.render("auth/register");
});

app.get("/login", (req, res) => {
  res.render("auth/login");
});

app.use(express.static("public/css"));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
