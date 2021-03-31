import { Album } from "models";
import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript'


@Table({tableName: 'Track', createdAt: false, deletedAt: false, updatedAt: false})
export class Track extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'TrackId'
    })
    public id: Number;

    @Column({field: 'Name'})
    public name: String;

    @ForeignKey(() => Album)
    @Column({field: 'AlbumId'})
    public albumId: Number;

    @BelongsTo(() => Album, 'AlbumId')
    public album: Album
}
