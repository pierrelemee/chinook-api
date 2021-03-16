import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('sqlite:chinook.sqlite');

sequelize.authenticate()
