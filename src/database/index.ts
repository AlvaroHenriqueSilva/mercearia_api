import { Sequelize } from "sequelize";

const connection = new Sequelize('mercearia', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

try {
    connection.authenticate()
} catch (error) {
    console.log(error)
}

export default connection