//Chamando o método Date() do objeto Date:

let dataEHora = Date(); // utilizando a chamada de função diretamente
console.log(dataEHora); // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora); // string

//Criando uma instância do objeto Date.
console.log("Valores para a instância do objeto Date");
let dataEHora1 = new Date(); // utilizando o construtor do objeto Date
console.log(dataEHora1); // 2022-02-01T02:46:51.517Z
console.log(typeof dataEHora1); // object

//Quando utilizamos um construtor, também temos acesso a todos os métodos do objeto Date.
let dataComConstrutor = new Date();
let data1 = dataComConstrutor.getDate();
console.log(`A data de hoje é: ${data1}`); // aparece o valor da data

//OBS: uma data gerada através da chamada da função Date() diretamente não pode acessar os demais métodos do objeto Date.

// Alguns exemplos de outros métodos disponíveis no objeto Date são:

// .getMillisseconds()
// .getSeconds()
// .getMinutes()
// .getHours()
// .getDay()
// .getMonth()
// .getFullYear()
