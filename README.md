# 🏆 REST API Mercearia

Este projeto foi desenvolvido para colocar em prática os conhecimentos adquiridos em NodeJs e Express. Essa API foi criada usando TypeScript junto com o Sequelize para manipulação dos dados no banco de dados.

💻 A API permite criar novos usuários e fazer login gerando um token (JWT), que será utilizado nas rotas de produtos para verificar a autenticação e salvar no banco qual usuário criou um novo produto na mercearia.

## 🛠️ Tecnologias
<p align="center">
  <img align="center" height="30" width="50" alt="html-icon" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg">
  <img align="center" height="30" width="50" alt="html-icon" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg">

  <img align="center" height="30" width="50" alt="html-icon" src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg">
  <img align="center" height="30" width="50" alt="html-icon" src="https://github.com/devicons/devicon/blob/master/icons/sequelize/sequelize-original.svg">
  
  <img align="center" height="30" width="50" alt="html-icon" src="https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg">
</p>


## 🏁 Clonar o repositório
```bash
git clone https://github.com/AlvaroHenriqueSilva/mercearia_api.git
````
## Instalar as dependências
```bash
npm install
````
## Rodar o App
#### Antes de rodar a API certifique-se de ter iniciado o MySql na sua máquina e de ter criado um Banco de dados com o nome de: mercearia

```bash
npm start
````

## Gerar as seeds 
#### Pare o servidor e no terminal e copie e cole o comando e depois rode o servidor novamente
```bash
npm run seed
````

# Endpoints da API

## Usuários

### `POST /users`

- Criar um novo usuário.

### `POST /login`

- Fazer login do usuário.


## Produtos

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

## Entradas estoque

### `POST /products/entrys/:id`

- `:id` (id do produto): Criar um nova entrada para o produto.

## Saidas estoque

### `POST /products/outs/:id`

- `:id` (id do produto):  Criar um nova saida para o produto.