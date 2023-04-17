const botao = document.querySelector("#calcular");
const elementoh1 = document.querySelector(".resultado");

botao.addEventListener("click", (evento) => {
  elementoh1.innerHTML = "Fui clicado";
});

// const botao = document.getElementById("calcular");
// botao.addEventListener("click", () => {
//   botao.innerHTML = "Fui clicado";
// });
