const user = {
  nome: "Edna",
  email: "edna@email.com",
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Edson",
  email: "edson@email.com",
  criarCursos() {
    console.log("Curso criado");
  },
};

// Herdar o método exibirInfos no objeto admin
// O objeto user está sendo usado como protótipo para o objeto admin
Object.setPrototypeOf(admin, user);
admin.exibirInfos();
