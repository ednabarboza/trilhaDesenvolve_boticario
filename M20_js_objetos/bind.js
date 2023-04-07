//O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:

const personagem = {
  nome: "Princesa Leia",
  apresentar: function () {
    return `a personagem é ${this.nome}`;
  },
};
const personagemGenerico = personagem.apresentar;
console.log(personagemGenerico());
//a personagem é undefined

// Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar()
// do contexto do objeto na qual foi criada, e por isso this não está mais acessível;
// a função perdeu a referência original e não consegue mais localizar onde está this.

const personagemDefinido = personagemGenerico.bind(personagem);
console.log(personagemDefinido());
//a personagem é Princesa Leia

// Utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem.
// Assim, sempre que esta função for executada a partir da variável personagemDefinido,
// a função original vai usar o objeto personagem como contexto de execução. Dessa forma, this sempre se
// refere ao objeto personagem e é capaz de acessar suas propriedades.
