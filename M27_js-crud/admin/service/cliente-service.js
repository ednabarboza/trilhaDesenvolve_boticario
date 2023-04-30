//criando conexão usando o fetch
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível listar os clientes");
  });
};

//método usando promisse e xmlhttprequest
// const listaClientes = () => {
//   const promisse = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();

//     http.open("GET", "http://localhost:3000/profile"); //abrir a comunicação com o servidor

//     //definir retorno quando a página for carregada
//     http.onload = () => {
//       if (http.status >= 400) {
//         reject(JSON.parse(http.response));
//       } else {
//         resolve(JSON.parse(http.response));
//       }
//     };
//     http.send(); //enviar a requisição
//   });
//   return promisse;
// };

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Não foi possível criar um cliente");
  });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  }).then((resposta) => {
    if (!resposta) {
      throw new Error("Não foi possível remover o cliente");
    }
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível detalhat o cliente");
  });
};

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.json();
    }
    throw new Error("Não foi possível atualizar o cliente");
  });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
