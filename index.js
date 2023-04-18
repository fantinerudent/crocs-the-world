import express from 'express';
import chalk from 'chalk';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const serverPort = 8000;

const crocs = require('./crocs.json');

const app = express();

app.listen(serverPort, () => {
    console.log(chalk.blue.bgRed.bold(" le serveur est lancé !!!!"))
})

app.get('/crocs', (req, res) => {
    res.send(crocs);
})

app.get('/croc/:id', (req, res) => {
    console.log(req.params.id);
    let result = crocs.filter((croc) => croc.id === parseInt(req.params.id));
    return !result ? res.send(result) : res.sendStatus(404)
})

app.get('/croc?name='croctopel', (req, res) => {
    console.log(req.params.id);
    let result = crocs.filter((croc) => croc.id === parseInt(req.params.id));
    return !result ? res.send(result) : res.sendStatus(404)
})
