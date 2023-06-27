import express from "express";
import chalk from "chalk";

const require = createRequire(import.meta.url);

import { createRequire } from "node:module";

const cookieParser = require('cookie-parser');

const connection = require("./db.cjs");

const serverPort = 5000;

const app = express();

app.use(cookieParser());
let bodyParser = require("body-parser");
let cors = require("cors");

import {
  getAllCrocs,
  addNewCroc,
  getCrocById,
  updateCroc,
} from "./controllers/crocs.controller.js";

import {
  updateUser,
  createUser,
  getUserById,
  getUserByEmailWithPasswordAndPassToNext
} from "./controllers/user.controller.js";


app.use(cors({
  origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
}));
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

// CROCS handlers 

app.get("/croc", (req, res) => {
  getAllCrocs(req, res);
});
app.get("/croc/:id", (req, res) => {
  getCrocById(req, res);
});
app.post("/croc", (req, res) => {
  addNewCroc(req, res);
});
app.put("/croc/:id", (req, res) => {
  updateCroc(req, res);
});



import pkg from "./services/auth.cjs";
const { createToken, hashPassword, verifyPassword } = pkg;

app.post("/user", hashPassword, createUser);
app.put("/user/:id", updateUser);
app.get("/user/:id", getUserById);
app.post("/login", getUserByEmailWithPasswordAndPassToNext, verifyPassword, createToken);