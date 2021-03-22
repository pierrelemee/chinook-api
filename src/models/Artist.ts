import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript'
import { Album } from ".";

@Table({tableName: 'Artist', createdAt: false, deletedAt: false, updatedAt: false})
export class Artist extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'ArtistId'
    })
    public id: Number;
    @Column({field: 'Name'})
    public name: String;

    @HasMany(() => Album)
    public albums: Album[]
}
