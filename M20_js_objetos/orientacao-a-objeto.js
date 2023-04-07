class Pessoa {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }
  //método ---> função que executa num contexto de um objeto
  saudacao() {
    console.log(`Seja bem vindo(a) ${this.nome}`);
  }
}

const pessoa1 = new Pessoa("Edna", 34, 1.61);

console.log(pessoa1);
console.log(pessoa1.saudacao());

class Animal extends Pessoa {
  constructor(nome, idade, altura, raca) {
    super(nome, idade, altura);
    this.raca = raca;
  }
}

const animal1 = new Animal("Maju", 7, 0.4, "pelo curto");
console.log(animal1);
