const express = require("express");
const routes = require("./routes"); //importa todos os métodos do arquivo routes/index.js

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`servidor está rodando na porta: ${port}`));

module.exports = app;

//ponto de entrada da aplicação onde o servidor é iniciado. Biblioteca express gerencia as rotas.
