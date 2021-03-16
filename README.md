# chinook-pitou

A backend project serving a web service API to access [Chinook database data](https://github.com/lerocha/chinook-database).

## Setup & run

### Setup

```bash
wget https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite_AutoIncrementPKs.sqlite -O ./chinook.sqlite

yarn install --dev
```

### Run

```bash
yarn dev
```

If you want to enable "hot reload" (whenever a file is changed);

```bash
yarn watch
```

## Overview

This project runs [**Typescript**](https://www.typescriptlang.org/) code behind [Express.js](https://expressjs.com/).

I decided to run _only_ Typescript code transpiled to ES6 (ECMAScript version 6), based on [this excellent article](https://www.freecodecamp.org/news/how-to-set-up-a-typescript-project-67b427114884/).

To access the database, I chose to rely on [the popular ORM `Sequelize`](https://sequelize.org/v5/manual/getting-started.html).

To ease the model class definition, I included [the `sequelize-typescript` library](https://github.com/RobinBuschmann/sequelize-typescript),
allowing me to define `Model` this way (example: `src/model/Artist.ts`):

```typescript
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
```

To maintain a high level of OOP definitions, I installed [`routing-controllers`](https://github.com/typestack/routing-controllers),
inspired by [this brilliant article](https://codebrains.io/express-typescript-routing-controllers/).