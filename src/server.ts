import express from 'express';
import connection from './database'
import Product from './models/products/Produto';
const app = express()



connection.sync()
          .then(() => app.listen(3000, () => console.log('Server is listening!')))
          .catch((error) => console.log(error))
    