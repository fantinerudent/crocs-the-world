import express from "express";
import chalk from "chalk";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const connection = require("./db.cjs");
const serverPort = 3000;
const app = express();
var bodyParser = require("body-parser");
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
  connection
    .promise()
    .query("SELECT * FROM croc")
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products from db.");
    });
});

app.post("/croc", (req, res) => {
  console.log(req.body);
  const { name, price, description, imgUrl, color } = req.body;
  const SQL_query =
    "INSERT INTO croc (name, price, description, img_url, color) VALUES (?, ?, ?, ?, ?)";
  connection
    .promise()
    .query(
      SQL_query, [name, price, description, imgUrl, color]
    )
    .then(([results]) => {
      if (results.affectedRows === 1) {
        res.status(201).json({ message: "crocn added" });
      } else {
        res.status(500).json({ message: "error" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products from db.");
    });
});

// const crocs = require('./crocs.json');

// app.listen(serverPort, () => {
//     console.log(chalk.blue.bgRed.bold(" le serveur est lancé !!!!"))
// })

// app.get('/crocs', (req, res) => {
//     res.send(crocs);
// })

// app.get('/croc/:id', (req, res) => {
//     console.log(req.params.id);
//     let result = crocs.filter((croc) => croc.id === parseInt(req.params.id));
//     return !result ? res.send(result) : res.sendStatus(404)
// })

// app.get('/croc?name='croctopel', (req, res) => {
//     console.log(req.params.id);
//     let result = crocs.filter((croc) => croc.id === parseInt(req.params.id));
//     return !result ? res.send(result) : res.sendStatus(404)
// })
