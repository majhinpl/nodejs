const express = require("express");
const { users } = require("./model/index");
const app = express();
const PORT = 3000;
const bcrypt = require("bcrypt");
require("./model/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  await users.create({
    username,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  res.send("users created");
});

app.use(express.static("public/css"));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
