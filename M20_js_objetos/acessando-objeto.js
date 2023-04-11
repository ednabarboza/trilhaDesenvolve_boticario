const cliente = {
  nome: "Edna",
  idade: 34,
  cpf: "12354865",
};

console.log(cliente.cpf.substring(0, 3)); //Mostrar apenas o 3 primeiros dígitos do cpf - Começa no índice 0 e vai até o índice 3 (esse não conta)

//console.log(cliente.nome); // acessando por notação de ponto

// acessando por notação de colchetes
const chaves = ["nome", "idade", "cpf"];
console.log(cliente[chaves[0]]);

//acessando todas as chaves
//chaves.forEach((info) => console.log(cliente[info]));

//outras formas de acessar por notação de colchetes
console.log(cliente["cpf"]);
console.log(`Meu cpf é ${cliente["cpf"]}`);
