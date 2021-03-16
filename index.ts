import express from 'express'
//import * as cors from 'cors'
//import * as bodyParser from 'body-parser'

const app = express()
const port = 5000

import { Sequelize } from 'sequelize-typescript'
import Artist from './src/model/Artist'

const sequelize: Sequelize = new Sequelize({
    storage: `${__dirname}/chinook.sqlite`,
    dialect: 'sqlite',
    models: [Artist]
});



// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/api/artist/:id', async function(req, res) {
    let artist: Artist = await Artist.findByPk(req.params.id)
    res.send(`<h1> ${artist.name}</h1>`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
});