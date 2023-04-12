import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from 'express';
const serverPort = 8000;
const app = express();
const crocs = require('./crocs.json');

app.listen(serverPort, () => {
    console.log('Coucou le serveur est lancé')
})

app.get('/crocs', (req,res) => {
    res.send(crocs)
})