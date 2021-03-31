//import 'module-alias/register';
import express from 'express';
import bodyParser from "body-parser";
import { useExpressServer } from "routing-controllers";
import { Album, Artist, Track } from "models"
import { ArtistController, AlbumController } from "controllers"
import { Sequelize } from 'sequelize-typescript'

const app = express()
// Allow to call this.json() from router callbacks
app.use(bodyParser.json())

const port = 5000

const sequelize: Sequelize = new Sequelize({
    storage: '../chinook.sqlite',
    dialect: 'sqlite',
    models: [ Artist, Album, Track ],
});

useExpressServer(app, {
    controllers: [ ArtistController, AlbumController ]
});

app.listen()

app.listen(port, () => {
    console.log(`Chinook API running at http://127.0.0.1:${port}`)
});
