const colecionador = {
  nome: "João do Gibi",
  idade: 41,
  tipocolecao: ["quadrinhos"],
  contato: "joao@email.com",
  adicionarTipo: function (propriedade, tipo) {
    this[propriedade].push(tipo);
  },
};

console.log(colecionador.nome); //notação de ponto
console.log(colecionador["nome"]); //notação de colchete

console.log(colecionador);
