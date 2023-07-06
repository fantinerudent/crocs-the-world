import express from "express";
import chalk from "chalk";

const require = createRequire(import.meta.url);
let bodyParser = require("body-parser");
let cors = require("cors");

const cookieParser = require('cookie-parser');
import { createRequire } from "node:module";


const connection = require("./db.cjs");

const serverPort = 5000;

const app = express();

app.use(cookieParser());

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
  // optionsSuccessStatus: 200,
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

const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "./public/uploads" });
const { v4: uuidv4 } = require("uuid");


// route POST pour recevoir un fichier dont le nom est "avatar"
app.post("/avatar", upload.single("name"), (req, res) => {
  console.log(req.file)
  // On récupère le nom du fichier
  const { originalname } = req.file;
  // On récupère le nom du fichier
  const { filename } = req.file;
  // On utilise la fonction rename de fs pour renommer le fichier
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/test-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});
