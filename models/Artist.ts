import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import { Album } from "models/index";

@Table({tableName: 'Artist', createdAt: false, deletedAt: false, updatedAt: false})
export class Artist extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'ArtistId'
    })
    public id: number;
    @Column({field: 'Name'})
    public name: string;

    @HasMany(() => Album)
    public albums: Album[]
}
