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

//Object.keys --> método para mostrar as chaves de um objeto
// const resultadoChaves = Object.keys(cliente);
// console.log(resultadoChaves);

//Object.values --> método para mostrar os valores de um objeto
// const resultadoChaves = Object.values(cliente);
// console.log(resultadoChaves);

//Object.entries --> método para mostrar as chaves e os valores de um objeto
// const resultadoChaves = Object.entries(cliente);
// console.log(resultadoChaves);

//OBS: O método include() retorna true or false
function oferecerSeguro(dep) {
  const dependentes = Object.keys(dep);

  if (dependentes.includes("dependentes")) {
    console.log(`Seguro de vida ativado para ${dep.nome}`);
  }
}

oferecerSeguro(cliente);
