const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json([
    {
      id: 1,
      name: "santo",
    },
    {
      id: 2,
      name: "korim",
    },
    {
      id: 3,
      name: "hima",
    },
    {
      id: 4,
      name: "laksmi santo",
    },
    {
      id: 5,
      name: "rohim",
    },
    {
      id: 6,
      name: "prrionti",
    },
  ]);
});

app.listen(8000, function () {
  console.log(chalk.yellow("server is running 8000 port"));
});
