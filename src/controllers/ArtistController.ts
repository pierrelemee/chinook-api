//import { Request, Response } from 'express';
import { JsonController, OnUndefined, Param, Get } from "routing-controllers";
import {Artist, Album} from "../models";

@JsonController()
export class ArtistController {

    @Get("/api/artist/:id")
    @OnUndefined(404)
    async getOne(@Param("id") id: number) {
        const artist: Artist = await Artist.findByPk(id, {include: Album});
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