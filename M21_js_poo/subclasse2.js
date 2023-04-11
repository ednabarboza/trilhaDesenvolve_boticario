import User from "./superclasse.js";

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaAluno(estudante, curso) {
    return `${estudante} passou no curso de ${curso}`;
  }

  reprovaAluno() {
    return `${this.nome} foi reprovado`;
  }
}

const docente1 = new Docente("João", "joao@j.com.br", "28/05/2000");
console.log(docente1);
console.log(docente1.exibirInfos());
console.log(docente1.aprovaAluno("Maria", "Python"));
console.log(docente1.reprovaAluno());
