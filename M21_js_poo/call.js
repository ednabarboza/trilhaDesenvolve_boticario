// function saudacao() {
//   console.log(`${this.nome} seja bem vindo(a)`);
// }

// const pessoa = {
//   nome: "Edna",
//   idade: 34,
// };

//saudacao.call(pessoa);

//Função construtora
//

function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const user = {
  nome: "Mariana",
  email: "m@m.com",
  executaFuncao: function (fn) {
    fn.call(user, this.nome, this.email);
  },
};

user.executaFuncao(exibeMensagem);
