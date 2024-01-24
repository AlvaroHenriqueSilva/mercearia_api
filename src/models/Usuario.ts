import { DataTypes } from 'sequelize';
import connection from '../database'
import Produto from './Produto';


const Usuario = connection.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Usuario.hasMany(Produto, {
    foreignKey: {
        name: 'id_usuario'
    }
})

export default Usuario;