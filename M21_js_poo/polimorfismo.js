//polimorfismo é a possibilidade de subclasses usarem métodos com o mesmo nome mas com comportamento diferente.
//Subclasses com o mesmo nome e comportamento diferentes DEVEM TER A MESMA ASSINATURA DO MÉTODO, ou seja,
//devem ter OS MESMOS PARÂMETROS!

class User {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  descricao() {
    return `${this.nome} tem ${this.idade} anos`;
  }
}

class Pessoa extends User {
  constructor(nome, idade, altura, peso) {
    super(nome, idade, altura);
    this.peso = peso;
  }

  seuPeso() {
    return `${this.nome} tem ${this.peso} kg`;
  }
}

class Animal extends Pessoa {
  constructor(nome, idade, altura, peso, cor) {
    super(nome, idade, altura, peso);
    this.cor = cor;
  }
  seuPeso() {
    return `O animal ${this.nome} tem pelos na coloração ${this.cor} e pesa ${this.peso} kg`;
  }

  cadastro(sobrenome) {
    return `O nome completo do animal é ${this.nome} ${sobrenome}`;
  }
}

console.log("Dados para User -------------->");
const novoUser = new User("Edna", 34, "89165456");
console.log(novoUser.descricao());

console.log("Dados para Pessoa -------------->");
const novaPessoa = new Pessoa("Edson", 31, 1.72, 75);
console.log(novaPessoa);
console.log(novaPessoa.seuPeso());
console.log(novaPessoa.descricao());

console.log("Dados para Animal -------------->");
const novoAnimal = new Animal("Maju", 7, 0.4, 3.5, "cinza com branco");
console.log(novoAnimal);
console.log(novoAnimal.seuPeso());
console.log(novoAnimal.descricao());
console.log(novoAnimal.cadastro("Lima"));
