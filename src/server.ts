import express, { urlencoded, json} from 'express';
import connection from './database'

// Models
// =======
import Produto from './models/Produto';
import EntradaEstoque from './models/EntradaEstoque';


// Rotas
// ======
import products from './routes/products';

const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())

app.use(products)

connection.sync()
          .then(() => app.listen(3000, () => console.log('Server is listening!')))
          .catch((error) => console.log(error))
    