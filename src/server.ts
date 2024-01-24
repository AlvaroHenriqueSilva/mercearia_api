import express, { urlencoded, json} from 'express';
import connection from './database'

// Models
// =======
import Produto from './models/Produto';
import EntradaEstoque from './models/EntradaEstoque';
import SaidaEstoque from './models/SaidaEstoque';
import Usuario from './models/Usuario';

Usuario.sync({ force: true })

// Rotas
// ======
import users from './routes/users'
import products from './routes/products';
import entrys from './routes/entrys'
import outs from './routes/outs'

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())

app.use(users)
app.use(products)
app.use(entrys)
app.use(outs)

connection.sync()
          .then(() => app.listen(3000, () => console.log('Server is listening!')))
          .catch((error) => console.log(error))
    