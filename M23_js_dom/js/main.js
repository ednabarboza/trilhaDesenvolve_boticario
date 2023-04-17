const controle = document.querySelectorAll("[data-controle]");
//data-controle é um data attributes

const estatisticas = document.querySelectorAll("[data-estatistica]"); //<p> com os valores das estatisticas

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    //pega o sinal que está no data-controle/ pega o nó pai (tag controle)
    atualizaEstatisticas(evento.target.dataset.peca); //pega o evento que tem data-peca
    //atualizaEstatiticas(peca)
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]"); //data-contador é um data attributes do input
  //console.log(peca); //pega a tag do input
  if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    peca.value = parseInt(peca.value) - 1;
  }
}

function atualizaEstatisticas(peca) {
  // console.log(pecas[peca]);

  estatisticas.forEach((elemento) => {
    console.log(elemento.textContent);

    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}

//Explicação do código para 1 braço
//pecas[peca]
// bracos: {
//   forca: 29,
//   poder: 35,
//   energia: -21,
//   velocidade: -5,
// },

//elemento.textContent
// forca = 768
// poder = 630
// energia = 289
// velocidade = 597

//elemento.dataset.estatistica
// forca
// poder
// energia
// velocidade

//elemento.textContent (braço)=
// parseInt(elemento.textContent) +
// pecas[peca][elemento.dataset.estatistica];

//Resultado para 1 braço
// força: 768 + 29 = 797
// poder: 630 + 35 = 665
// energia: 289 - 21 = 268
// velocidade: 597 - 5 = 592

//Verificar

// const cores = document.querySelectorAll(".alterar");

// cores.forEach((cadaCor) => {
//   cadaCor.addEventListener("click", (evento) => {
//     trocaCor(evento.target.id);
//   });
// });

// function trocaCor(cor) {
//   const mudacor = document.getElementById("robotron");
//   mudacor.src = "img/robotron-" + cor + ".png";
// }
