// Formas como os objetos são criados (usando função construtora, usando objeto literal)

// - Com o operador new
// - Com o Object.create

// function User(nome, email) {
//   //propriedade -> parâmetro
//   this.nome = nome;
//   this.email = email;
//   this.exibirInfos = function () {
//     return `${this.nome}, ${this.email}`;
//   };
// }

//Forma de criar objeto usando o construtor (usando o new)
//novoUser é o objeto criado a partir do protótipo User (função construtora)
//const novoUser = new User("Edna", "edna@e.com");
//console.log(novoUser.exibirInfos());

//Criando objetos a partir do Object.create
// function Admin(role) {
//   User.call(this, "Edna", "edna@e.com");
//   this.role = role || "estudante";
// }

// ---> Criação do objeto a partir do Object.create
//Linha 28 --> Os protótipos de User estão sendo passados para o Admin (que já é um protótipo)
// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);
//Hierarquia de protótipos: Object.create (base) ---> User ----> Admin

//A partir de um objeto literal (user) vamos criar um novo objeto (novoUser)
//Nesse caso o novoUser está sendo criado a partir de um protótipo de user
const user = {
  //init é uma espécie de construtor criado para um objeto literal
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function () {
    return this.nome;
  },
};

const novoUser = Object.create(user);
novoUser.init("Edna", "edna@e.com");
console.log(novoUser.exibirInfos());
//Testando se user é mesmo protótipo de novoUser
console.log(user.isPrototypeOf(novoUser)); //true
