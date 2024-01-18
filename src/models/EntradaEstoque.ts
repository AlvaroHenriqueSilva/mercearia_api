import { DataTypes } from 'sequelize';
import connection from '../database'
import Produto from './Produto';


const EntradaEstoque = connection.define('entradas_estoque', {
    id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_entrada: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }

})

Produto.hasMany(EntradaEstoque, {
    foreignKey: {
        name: 'id_produto'
    }
})



export default EntradaEstoque;