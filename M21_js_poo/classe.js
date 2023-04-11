class User {
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || "estudante";
    this.ativo = ativo;
  }
  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

const novoUser = new User("Edna", "edna@e.com", "17/01/1989");
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser)); //true ---> Estou perguntando se User é o protótipo para novoUser
