const pessoa = {
  nome: "Bruce Banner",
  dataNascimento: "25/01/1980",
  carteiraIdentidade: "997776-X",
  email: "profbanner@email.com",
  telefone: "+552877776666",
  cidade: "Cachoeiro de Itapemirim",
  estado: "ES",
};

//Adicionando os campos seguro social e cpf

pessoa.seguroSocial = "6876546345";
pessoa.cpf = "568426455";

console.log(pessoa);

//Exibir apenas os 4 primeiros dígitos do cpf
//console.log(pessoa.cpf.substring(0, 4));
