const cliente = {
  nome: "Edna",
  idade: 34,
  cpf: "12354865",
};

cliente.dependentes = {
  nome: "Maju",
  idade: 7,
  raça: "pelo curto",
};

console.log(cliente);

cliente.dependentes.nome = "Maju Lima";

console.log(cliente);
