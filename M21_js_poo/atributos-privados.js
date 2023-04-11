//# serve para tornar um atributo como privado

//propriedades e métodos públicos são aqueles que podem ser acessados a partir de qualquer parte do código;
//os privados são acessados apenas “por dentro” da classe.

class User {
  #nome;
  #email;
  #cpf;
  constructor(nome, email, cpf) {
    this.#nome = nome;
    this.#email = email;
    this.#cpf = cpf;
  }
  exibirInfos() {
    return `${this.#nome}, ${this.#email}, ${this.#cpf}`;
  }
}

const novoUser = new User("Edna", "e@e.com", "65465416");
console.log(novoUser);
