import { DataTypes } from 'sequelize';
import connection from '../database'
import Produto from './Produto';


const SaidaEstoque = connection.define('saidas_estoque', {
    id_saida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_saida: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }

})

Produto.hasMany(SaidaEstoque, {
    foreignKey: {
        name: 'id_produto'
    }
})



export default SaidaEstoque;