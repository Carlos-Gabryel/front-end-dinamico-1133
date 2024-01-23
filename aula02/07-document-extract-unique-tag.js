let result;

result = document.body;
result = document.getElementById("tabela1");
result = document.querySelector("#tabela1");
result = document.querySelector(".borda");
result = document.querySelector("h1").innerText;
result = document.querySelector("h1").textContent;

document.querySelector("h1").innerText = "Novo Título";
document.getElementById("tabela1").innerHTML = "<h1>Roubei</h1>";

function criarConteudo(elemStr) {
  const elemP = document.createElement(elemStr);
  elemP.innerText = "Conteúdo";
  return elemP;
}

result = criarConteudo("div");
result = criarConteudo("h1");
result = criarConteudo("p");

const elementPai = document.body;
elementPai.appendChild(result);

console.log("result", result);
