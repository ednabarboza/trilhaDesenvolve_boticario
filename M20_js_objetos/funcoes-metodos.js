const cliente = {
  nome: "Edna",
  idade: 34,
  cpf: "12354865",
  dependentes: [
    { nome: "Maju", idade: 7, raça: "pelo curto" },
    { nome: "Formiguinha", idade: 4, raça: "pelo curto" },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};
console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);
