import express from "express";
import chalk from "chalk";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const connection = require("./db.cjs");
const serverPort =  3000;
const app = express();

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
