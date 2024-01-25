const environment = {
  dev: "http://localhost:3000",
  prod: "https://api.example.com",
};

const curso = {
  id: 7,
  urlImage: "https://picsum.photos/id/1043/800/600",
  name: "Frontend com React",
};

const baseUrl = "http://localhost:3000";

async function request(url, objBody) {
  return await fetch(url, objBody);
}

function carregarCursos() {
  return request(`${baseUrl}/cursos`);
}

function adicionarCursos(curso) {
  return request(`${baseUrl}/cursos`, {
    method: "POST",
    body: JSON.stringify(curso),
  });
}

function removerCursos(id) {
  return request(`${baseUrl}/cursos/${id}`, {
    method: "DELETE",
  });
}

function atualizarCursos(id, curso) {
  return request(`${baseUrl}/cursos/${id}`, {
    method: "PUT",
    body: JSON.stringify(curso),
  });
}
