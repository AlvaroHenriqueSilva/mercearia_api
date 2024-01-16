import { Sequelize } from "sequelize";

export const connection = new Sequelize('mercearia', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})