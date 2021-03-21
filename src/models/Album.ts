/// <reference path="definitions.d.ts" />
import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Artist } from "@models/index";

@Table({tableName: 'Album', createdAt: false, deletedAt: false, updatedAt: false})
export class Album extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'AlbumId'
    })
    public id: Number;

    @Column({field: 'Title'})
    public name: String;

    @BelongsTo(() => Artist, 'ArtistId')
    @Column({field: 'ArtistId'})
    artist: Artist
}
