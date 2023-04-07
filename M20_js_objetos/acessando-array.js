const cliente = {
  nome: "Edna",
  idade: 34,
  cpf: "12354865",
  telefone: ["81963587565", "8726356654"],
};

//Acessando o segundo número de telefone
// console.log(cliente.telefone[1]);

//Acessando todos os números de telefone
cliente.telefone.forEach((fone) => {
  console.log(fone);
});
