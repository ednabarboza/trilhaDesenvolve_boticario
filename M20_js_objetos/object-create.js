const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

// Apontando por referência

// const objPersonagem2 = objPersonagem;

// objPersonagem2.name = "Lula Molusco";

// console.log(objPersonagem.name); // Lula Molusco
// console.log(objPersonagem2.name); // Lula Molusco

// Criando uma cópia do objeto

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Bob esponja";

console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem2.nome); //Bob esponja

//O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro
