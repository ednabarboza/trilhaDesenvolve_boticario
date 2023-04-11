import User from "./superclasse.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  criarCursos(curso, vagas) {
    return `Curso de ${curso} criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin("Edson", "edson@e.com", "14/02/1992");
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCursos("JavaScript", 50));
