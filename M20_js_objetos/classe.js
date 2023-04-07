class Cliente {
  constructor(nome, cpf, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  mostrarSaldo() {
    console.log(this.saldo);
  }
}

const cliente1 = new Cliente("Edna", "9816514", 500);
console.log(cliente1);
console.log(cliente1.mostrarSaldo());

cliente1.depositar(200);

console.log(cliente1.mostrarSaldo());
