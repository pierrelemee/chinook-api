/// <reference path="definitions.d.ts" />
import { Artist, Track } from ".";
import {Table, Column, Model, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'
import {} from "./Track";


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

    @ForeignKey(() => Artist)
    @Column({field: 'ArtistId'})
    public artistId: Number;

    @BelongsTo(() => Artist, 'ArtistId')
    public artist: Artist

    @HasMany(() => Track)
    public tracks: Track[]
}
