const user = {
  nome: "Edna",
  email: "edna@email.com",
  exibirInfos: function () {
    console.log(this.nome);
  },
};

user.exibirInfos();
//const exibir = user.exibirInfos;
//exibir();

const exibir = function () {
  console.log(this.nome);
};

//bind (ligar) ---> liga a função exibir ao objeto user
const exibirNome = exibir.bind(user);
exibirNome();
