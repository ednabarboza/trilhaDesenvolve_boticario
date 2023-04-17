const lista = document.querySelector("ul");

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

// const lista = document.querySelector(".lista");
// const desaparece = document.querySelector('[data-estado="desaparecer"]');
// const aparece = document.querySelector('[data-estado="aparecer"]');

// desaparece.onclick = () => {
//   lista.hidden = "true";
// };

// aparece.onclick = () => {
//   lista.hidden = "false";
// };
