import 'module-alias/register';

import './container'

import express from 'express';
import bodyParser from "body-parser";
import { useExpressServer } from "routing-controllers";
import {ArtistController, AlbumController} from "controllers";

const app = express()
// Allow to call this.json() from router callbacks
app.use(bodyParser.json())

const port = 5000

useExpressServer(app, {
    controllers: [ ArtistController, AlbumController ]
});

app.listen(port, () => {
    console.log(`Chinook API running at http://127.0.0.1:${port}`)
});
