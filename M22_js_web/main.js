function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla ");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  //onkeydown ---> evento para quando a tecla do teclado é pressionada
  tecla.onkeydown = function (evento) {
    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add("ativa");
    }
  };

  //onkeydown ---> evento para quando a tecla do teclado é solta

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
