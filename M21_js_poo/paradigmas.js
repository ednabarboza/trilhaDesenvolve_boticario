//Paradigmas da programação

// - Imperativo(se preocupa com o “como” uma tarefa vai ser executada, o seu passo-a-passo e a sequência dessas etapas)
// Estrutural
// Procedural
// Orientado a objetos

function dobra(vetor) {
  let resultados = [];
  for (let i = 0; i < vetor.length; i++) {
    resultados.push(vetor[i] * 2);
  }
  return resultados;
}

console.log(dobra([2, 3, 4]));

// - Declarativo(expressa a lógica de um processo sem descrever o seu controle de fluxo)
// Funcional

function dobra1(vetor) {
  return vetor.map((item) => item * 2);
}

console.log(dobra1([2, 3, 4]));
