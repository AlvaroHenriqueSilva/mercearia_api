# REST API Mercearia

## Clonar o repositório
```bash
git clone https://github.com/AlvaroHenriqueSilva/mercearia_api.git
````
## Instalar as dependências
```bash
npm install
````
## Rodar o App
```bash
npm start
````
## Endpoints

### Produtos

### `GET /products`

- Nenhum parâmetro necessário.


### `GET /products/:id`

- `:id` (id do produto): ID único do produto.

### `POST /products/`

- Criar um novo produto.

### `PUT /products/:id`

- `:id` (id do produto): Atualiza um produto.

### `DELETE /products/:id`

- `:id` (id do produto): Exclui um produto.

### Entradas estoque

### `POST /products/entrys/:id`

- `:id` (id do produto): Criar um nova entrada para o produto.

### Saidas estoque

### `POST /products/outs/:id`

-`:id` (id do produto):  Criar um nova saida para o produto.