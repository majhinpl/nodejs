const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = 3000;

const router = require("./routes/userRoute");
require("./model/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const viewsRoute = require("./routes/viewsRoute");
const userRoute = require("./routes/userRoute");

app.use("/", viewsRoute);
app.use("/user", userRoute);

app.use(express.static("public/css"));

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
