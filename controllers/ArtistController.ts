//import { Request, Response } from 'express';
import 'reflect-metadata'
import { JsonController, OnUndefined, Param, Get } from "routing-controllers";
import {Artist} from "models";
import {container} from 'container'
import getDecorators from "inversify-inject-decorators";
import {Database} from "services";

const {lazyInject} = getDecorators(container);

@JsonController()
export class ArtistController {

    @lazyInject("db")
    protected database: Database

    @Get("/api/artist/:id")
    @OnUndefined(404)
    async getOne(@Param("id") id: number) {
        const artist: Artist = await this.database.getArtistById(id);
        return {
            id: artist.id,
            name: artist.name,
            albums: artist.albums.map(function (album) {
                return {
                    id: album.id,
                    name: album.name,
                };
            })
        }
    }

    //@Post("/users")
    /*
    post(@Body() artist: any) {
        // TODO implements this
    }
    */

    //@Put("/users/:id")
    /*
    put(@Param("id") id: number, @Body() user: any) {
        // TODO implements this
    }
    */

    //@Delete("/users/:id")
    /*
    remove(@Param("id") id: number) {
        // TODO implements this
    }
    */
}
