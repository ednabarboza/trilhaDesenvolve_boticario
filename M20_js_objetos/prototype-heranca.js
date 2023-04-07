function Cliente(nome, idade, cpf, saldo) {
  this.nome = nome;
  this.idade = idade;
  this.cpf = cpf;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.depositar += valor;
  };
}

//Criando um protótipo de Cliente

function ClientePoup(nome, idade, cpf, saldo, saldoPoup) {
  //call serve para chamar algo, nesse caso todas as propriedades do construtor Cliente
  Cliente.call(this, nome, idade, cpf, saldo);
  this.saldoPoup = saldoPoup;
}

const edvania = new ClientePoup("edvania", 30, "75465", 500, 600);
//console.log(edvania);

//Criação do método depositarPoup a partir do protótipo de ClientePoup
ClientePoup.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

edvania.depositarPoup(50);
console.log(edvania.saldoPoup);
console.log(edvania);
