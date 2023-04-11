//Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto.

function criaUser(nome, email) {
  return {
    nome,
    email,
    exibirInfos() {
      return `${nome}, ${email}`;
    },
  };
}

const newUser = criaUser("Edna", "e@e.com");
console.log(newUser);
console.log(newUser.exibirInfos());

//Função construtora
console.log("------> Resultados para funções construtoras");

function User(nome, email) {
  this.nome = nome;
  this.email = email;
  this.exibeInfos = function () {
    return `${nome}, ${email}`;
  };
}

//As funções construtoras devem ser chamadas com o operador new para criar instâncias do objeto User:
const newUser1 = new User("Edvania", "vaninha@v.com");
console.log(newUser1);
console.log(newUser1.exibeInfos());
