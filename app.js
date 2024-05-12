const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/blog", (req, res) => {
  res.render("blog.ejs");
});

app.get("/create", (req, res) => {
  res.render("createblog.ejs");
});



app.listen(3000, () => {
  console.log("server connected at port 3000");
});
