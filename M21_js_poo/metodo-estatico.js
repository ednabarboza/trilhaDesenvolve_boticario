class User {
  constructor() {
    this.nome = "Camila";
    this.email = "c@c.com";
    this.cpf = "12312312312";
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.cpf}`;
  }

  //só pode ser acessado a partir da própria classe
  static exibeNome(nome) {
    return nome;
  }
}

const novoUser = new User("Carol", "c@c.com", "12312312312");
const nomeUser = novoUser.nome;
console.log(User.exibeNome(nomeUser));
console.log(User.exibeNome("José"));
