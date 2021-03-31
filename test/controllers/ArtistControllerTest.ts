import {TestSuite} from "testyts/build/lib/decorators/testSuite.decorator";
import {Test} from "testyts/build/lib/decorators/test.decorator";
import {expect} from "testyts"
import {AfterAll, BeforeAll} from "testyts/build/lib/decorators/afterAndBefore.decorator";
import express from "express";
import bodyParser from "body-parser";
import {Sequelize} from "sequelize-typescript";
import {Album, Artist, Track} from "models";
import {useExpressServer} from "routing-controllers";
import {AlbumController, ArtistController} from "controllers";
import * as core from "express-serve-static-core";
import axios, {AxiosInstance} from "axios";
import {Server} from 'http'

@TestSuite()
export class ArtistControllerTest {

    protected app: core.Express
    protected server: Server
    protected sequelize: Sequelize
    protected client: AxiosInstance

    @BeforeAll()
    public beforeAll() : void {
        this.app = express()
        // Allow to call this.json() from router callbacks
        this.app.use(bodyParser.json())

        this.sequelize = new Sequelize({
            storage: '../chinook.sqlite',
            dialect: 'sqlite',
            models: [ Artist, Album, Track ],
            logging: function (msg) {
                // TODO implement this later
            }
        });

        useExpressServer(this.app, {
            controllers: [ ArtistController, AlbumController ]
        });

        this.server = this.app.listen(51234, '127.0.0.1');
        this.client = axios.create({
            baseURL: 'http://127.0.0.1:51234'
        });
    }

    @Test()
    public testGetArtist() : void{
        axios
            .get('/api/artist/135')
            .then(response => {
                expect.toBeEqual(response.status, 200)
                expect.toBeEqual(response.data, {
                    id: 135,
                    name: "System of a Down"
                })
            })
            .catch(() => expect.toBeTrue(false))
    }

    @AfterAll()
    public afterAll() : void {
        //this.sequelize.connectionManager.close()
        this.server.close()
    }
}
