//# serve para tornar um método como privado

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
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      cpf: this.#cpf,
    };
  }
  exibirInfos() {
    const objUser = this.#montaObjUser();
    return `${objUser.nome}, ${objUser.email}, ${objUser.cpf}`;
  }
}

const novoUser = new User("Edna", "e@e.com", "65465416");
console.log(novoUser.exibirInfos());
