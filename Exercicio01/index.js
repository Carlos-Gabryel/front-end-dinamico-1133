const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const listContainer = document.getElementById("listContainer");
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
addButton.addEventListener("click", onClickAddButton);
removeButton.addEventListener("click", onClickRemoveButton);

renderizarTarefa();

function renderizarTarefa() {
  listContainer.innerHTML = "";
  tarefas.forEach((tarefa) => {
    const tarefaElement = document.createElement("li");
    tarefaElement.innerText = tarefa;
    tarefaElement.classList.add("tarefa");
    listContainer.appendChild(tarefaElement);
  });
}

function onClickAddButton() {
  const tarefa = prompt("Digite a tarefa");
  if (tarefa.trim()) {
    tarefas.push(tarefa);
    salvarTarefas();
    renderizarTarefa(tarefa);
  } else {
    alert("Digite uma tarefa valida");
  }
}

function onClickRemoveButton() {
  const tarefaDeletada = prompt("Digite a tarefa");
  const inputTarefa = tarefaDeletada.trim();
  if (inputTarefa) {
    const index = tarefas.indexOf(inputTarefa);
    if (index > -1) {
      tarefas.splice(index, 1);
      salvarTarefas();
      renderizarTarefa();
    } else {
      alert("Tarefa não encontrada");
    }
  } else {
    alert("Digite uma tarefa valida");
  }
}

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
