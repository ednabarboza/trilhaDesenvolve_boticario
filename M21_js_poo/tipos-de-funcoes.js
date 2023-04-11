//declaração de função
function soma(num1, num2) {
  return num1 + num2;
}

//expressão de função
const soma = function (num1, num2) {
  return num1 + num2;
};

//arrow function ou “função de seta”
const soma = (num1, num2) => {
  return num1 + num2;
};

//no caso de blocos de código com apenas uma linha, podemos omitir o return e as chaves {}:

const soma = (num1, num2) => num1 + num2;

// Diferenças:
//- Funções criadas como declaração recebem um identificador (ou seja, um nome) e funções criadas como expressão são consideradas anônimas
//- Declarações de função têm seu código lido antes da execução de qualquer instrução, pois o interpretador “puxa” para as primeiras linhas do arquivo todas as variáveis e todas as declarações de função (HOISTING)
