const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

//Os objetos ainda estão separados; o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos:
// const guerreiro = { fichaGuerreiro, equipoGuerreiro };
// console.log(guerreiro);

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro };
console.log(guerreiro);

//Outro exemplo, nesse caso como as chaves são iguais o JS sobrescreve mostrando apenas a última
const mago = {
  nome: "Gandalf",
  classe: "mago",
};

const guerreiros = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const ranger = {
  nome: "Legolas",
  classe: "ranger",
};

const personagens = { ...mago, ...guerreiros, ...ranger };
console.log(personagens);
//O JavaScript sobrescreveu as chaves com o mesmo nome
