const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.listen(3000, () => {
  console.log("server connected at port 3000");
});
