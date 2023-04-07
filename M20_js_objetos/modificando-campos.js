const cliente = {
  nome: "Edna",
  idade: 34,
  cpf: "12354865",
};

//Para adicionar mais um campo

cliente.telefone = "897654616";

console.log(cliente);

// Para alterar um campo

cliente.idade = 25;
console.log(cliente);

//Deletar um campo - por notação de ponto
delete cliente.cpf;
console.log(cliente);

//Deletar um campo - por notação de colchetes
delete cliente["telefone"];
console.log(cliente);

//OBS: O operador delete não remove propriedades herdadas de outro objeto
