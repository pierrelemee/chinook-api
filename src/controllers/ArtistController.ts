import { JsonController, OnUndefined, Param, Get } from "routing-controllers";
import Artist from "../models/Artist";

@JsonController()
export class UserController {

    @Get("/api/artist/:id")
    @OnUndefined(404)
    async getOne(@Param("id") id: number) {
        const artist: Artist = await Artist.findByPk(id);
        return {
            id: artist.id,
            name: artist.name,
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