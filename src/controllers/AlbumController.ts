//import { Request, Response } from 'express';
import { JsonController, OnUndefined, Param, Get } from "routing-controllers";
import { Album, Track } from "../models";

@JsonController()
export class AlbumController {

    @Get("/api/album/:id")
    @OnUndefined(404)
    async getOne(@Param("id") id: number) {
        const album: Album = await Album.findByPk(id, {include: Track});
        return {
            id: album.id,
            name: album.name,
            tracks: album.tracks.map(function (track) {
                return {
                    id: track.id,
                    name: track.name,
                };
            })
        }
    }
}