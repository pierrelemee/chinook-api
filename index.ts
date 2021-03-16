import express from 'express'
import bodyParser from "body-parser";
import { useExpressServer } from "routing-controllers";

const server = express()
// Allow to call this.json() from router callbacks
server.use(bodyParser.json())
// Allow to ?
server.use(bodyParser.urlencoded({ extended: true }));

const port = 5000

import { Sequelize } from 'sequelize-typescript'
import Artist from './src/models/Artist'

const sequelize: Sequelize = new Sequelize({
    storage: `${__dirname}/chinook.sqlite`,
    dialect: 'sqlite',
    models: [`${__dirname}/src/models/*.ts`],
});

useExpressServer(server, {
    controllers: [`${__dirname}/src/controllers/*.ts`]
});

server.listen(port, () => {
    console.log(`Example app listening at http://127.0.0.1:${port}`)
});