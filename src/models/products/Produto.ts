import { DataTypes } from 'sequelize';
import { connection } from '../../database'


const Product = connection.define('Product', {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_produto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})


export default Product;