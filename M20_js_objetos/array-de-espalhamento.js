const cliente = [
  {
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
  },
  {
    nome: "Meiry",
    idade: 54,
    cpf: "6586716854",
    dependentes: [
      { nome: "Nina", idade: 10, raça: "poodle" },
      { nome: "Bela", idade: 8, raça: "pelo curto" },
    ],
    saldo: 500,
    depositar: function (valor) {
      this.saldo += valor;
    },
  },
];
//... -> spread operator, ou sintaxe de espalhamento
const listaUnica = [...cliente[0].dependentes, ...cliente[1].dependentes];

console.log(listaUnica);
console.table(listaUnica);
