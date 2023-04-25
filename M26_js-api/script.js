// Código assíncrono usando o async - await

async function buscaCep(cep) {
  var mensagemErro = document.getElementById("erro");
  mensagemErro.innerHTML = "";
  try {
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const converteCep = await consultaCep.json();
    if (converteCep.erro) {
      throw Error("Cep não existente");
    }

    let endereco = document.getElementById("endereco");
    endereco.value = converteCep.logradouro;

    let bairro = document.getElementById("bairro");
    bairro.value = converteCep.bairro;

    let cidade = document.getElementById("cidade");
    cidade.value = converteCep.localidade;

    let estado = document.getElementById("estado");
    estado.value = converteCep.uf;
    console.log(converteCep);
    return converteCep;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    console.log(erro);
  }
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => {
  buscaCep(cep.value);
});

//Usando o Promisse.All(retorna uma única Promisse)
// let ceps = ["01001000", "01001001"];
// let conjuntoCeps = ceps.map((valores) => buscaCep(valores));
// Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));
// buscaCep();

//Código assíncrono usando o then - método que as Promises disponibilizam
// const consultaCep = fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((resposta) => resposta.json())
//   .then((r) => {
//     if (r.erro) {
//       throw Error("Esse cep não existe!");
//     } else console.log(r);
//   })
//   .catch((erro) => console.log(erro))
//   .finally((mensagem) => console.log("Processamento concluído!"));
