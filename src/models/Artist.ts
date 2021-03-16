import {Table, Column, Model} from 'sequelize-typescript'

@Table({tableName: 'Artist', createdAt: false, deletedAt: false, updatedAt: false})
class Artist extends Model {
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