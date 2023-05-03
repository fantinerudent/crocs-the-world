import express from "express";
import chalk from "chalk";

const require = createRequire(import.meta.url);
import { createRequire } from "node:module";

const connection = require("./db.cjs");

const serverPort = 3000;

const app = express();

let bodyParser = require("body-parser");
let cors = require("cors");

import { getAllCrocs, addNewCroc } from "./controllers/crocs.controller.js";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(serverPort, () => {
  console.log(chalk.blue.bgRed.bold(" le serveur est lancé !!!!"));
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting to db");
    console.log(err);
  } else {
    console.log("connected to db");
  }
});


app.get("/croc", (req, res) => {
  getAllCrocs(req, res);
});

app.post("/croc", (req, res) => {
  addNewCroc(req, res);
});
