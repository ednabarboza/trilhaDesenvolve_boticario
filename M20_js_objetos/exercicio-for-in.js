const paciente = {
  nome: "James T.",
  idade: 30,
  email: "jt@email.com",
  identicacao: "Alpha01259859",
  funcao: "comandante",
  peso: 80.1,
  altura: 1.8,
  calcularIMC: function () {
    return this.peso / Math.pow(this.altura, 2);
  },
  nomeCompleto: function () {
    console.log(this.nome);
  },
};

let resultadoChave = "";

for (chave in paciente) {
  if (
    typeof paciente[chave] === "object" ||
    typeof paciente[chave] === "function"
  ) {
    continue;
  } else {
    resultadoChave += `${chave} ==> ${paciente[chave]}`;
  }
}

console.log(resultadoChave);
