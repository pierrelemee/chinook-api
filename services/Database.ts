import "reflect-metadata"
import { Sequelize } from 'sequelize-typescript'
import {Album, Artist, Track} from "models/"
import {provide as Provide} from "inversify-binding-decorators"

@Provide("db")
export class Database {

    protected sequelize: Sequelize

    constructor() {
        this.sequelize = new Sequelize({
            storage: 'chinook.sqlite',
            dialect: 'sqlite',
            models: [ Artist, Album, Track ],
        });
        console.log('Database constructor')
        console.log(this)
    }

    public async getArtistById(id: number): Promise<Artist> {
        return await this.sequelize.getRepository(Artist).findByPk(id, {include: Album});
    }
}
