// for in --> método do JS usado para percorrer objetos

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

let resultado = "";

//pegando as chaves
// for (chave in cliente) {
//   resultado += chave;
// }

// console.log(resultado);

//pegando os valores
// for (chave in cliente) {
//   resultado += `- ${cliente[chave]}`;
// }

// console.log(resultado);

//imprimindo chave e valor apenas de dados primitivos (excluindo os dados do tipo "objeto" e "função")
for (chave in cliente) {
  if (
    typeof cliente[chave] === "object" ||
    typeof cliente[chave] === "function"
  ) {
    continue;
  } else {
    resultado += `
     ${chave} ==> ${cliente[chave]}`;
  }
}

console.log(resultado);
