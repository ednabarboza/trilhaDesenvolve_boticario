const cliente = {
  nome: "Edna",
  idade: 34,
  cpf: "12354865",
  dependentes: [{ nome: "Maju", idade: 7, raça: "pelo curto" }],
};

cliente.dependentes.push({
  nome: "Formiguinha",
  idade: 4,
  raça: "pelo curto",
});

// Acessando dado dentro de um array de objeto
//console.log(cliente.dependentes[1].nome);

//Usando o método filter para filtrar pela dependente mais nova
const maisNova = cliente.dependentes.filter(
  (dependente) => dependente.idade === 4
);
console.log(maisNova[0].nome);
