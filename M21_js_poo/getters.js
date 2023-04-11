//Funções do tipo get NUNCA recebem argumentos, elas só retornam o que está dentro dela (apenas para leitura)!
// Esse método é chamado como uma propriedade e não como uma função, ou seja, SEM OS PARÊNTESES!

class User {
  #nome;
  #email;
  #cpf;
  constructor(nome, email, cpf) {
    this.#nome = nome;
    this.#email = email;
    this.#cpf = cpf;
  }
  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }
  get cpf() {
    return this.#cpf;
  }

  exibirInfos() {
    return this.#nome;
  }
}

const newUser = new User("Edna", "e@e.com", "6416387");
console.log(newUser.nome);
console.log(`${newUser.nome}, ${newUser.email}, ${newUser.cpf}`);
