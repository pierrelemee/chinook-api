import { Artist, Track } from "models";
import {Table, Column, Model, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript'


@Table({tableName: 'Album', createdAt: false, deletedAt: false, updatedAt: false})
export class Album extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'AlbumId'
    })
    public id: number;

    @Column({field: 'Title'})
    public name: string;

    @ForeignKey(() => Artist)
    @Column({field: 'ArtistId'})
    public artistId: number;

    @BelongsTo(() => Artist, 'ArtistId')
    public artist: Artist

    @HasMany(() => Track)
    public tracks: Track[]
}
