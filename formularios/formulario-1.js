const meuForm = document.getElementById("meuFormulario");
const nome = document.getElementById("nome");

function enviarFormulario(event) {
  event.preventDefault();
  const thisForm = event.target;

  const formData = new FormData(thisForm);

  // const nome = formData.get("nome");
  // const email = formData.get("email");
  // const idade = formData.get("idade");
  // const cargo = formData.get("cargo");

  const checkName = formData.get("nome").trim();

  if (!checkName) {
    nome.classList.add("erro");
  }

  const values = [...formData.values()];
  values.forEach((item) => {
    console.log(item);
    formData.get;
  });

  // const dados = {
  //   nome,
  //   email,
  //   idade,
  //   cargo,
  // };

  // console.log(dados);
}

function limparFormulario() {
  meuForm.reset();
}
