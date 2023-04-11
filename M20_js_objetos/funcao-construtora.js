function Cliente(nome, idade, cpf, saldo) {
  this.nome = nome;
  this.idade = idade;
  this.cpf = cpf;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.depositar += valor;
  };
}

const edna = new Cliente("Edna", "34", "53461651", 100);
console.log(edna);
