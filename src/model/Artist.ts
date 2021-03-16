import {Table, Column, AutoIncrement, Model, PrimaryKey} from 'sequelize-typescript'
import {DataTypes} from "sequelize";

@Table({tableName: 'Artist', createdAt: false, deletedAt: false, updatedAt: false})
class Artist extends Model {
    //@Column({field: 'ArtistId'})
    @Column({
        autoIncrement: true,
        primaryKey: true,
        field: 'ArtistId'
    })
    public id: Number;
    @Column({field: 'Name'})
    public name: String;
}

export default Artist;