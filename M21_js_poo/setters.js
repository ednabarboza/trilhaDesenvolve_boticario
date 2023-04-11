//Funções do tipo set aceitam apenas 1 parâmetro!
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

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  set email(novoEmail) {
    this.#email = novoEmail;
  }

  exibirInfos() {
    return this.#nome;
  }
}

const newUser = new User("Edna", "e@e.com", "6416387");
console.log(newUser.nome);

//Usando o set para modificar o nome
newUser.nome = "Edvania";
console.log(newUser.nome);
