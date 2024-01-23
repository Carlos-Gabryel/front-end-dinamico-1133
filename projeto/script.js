// Check if the form data is already stored in local storage
const formData =
  JSON.parse(localStorage.getItem("churrascometroFormData")) || {};

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate form data
function validateForm() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const cep = document.getElementById("cep").value;

  if (!nome || !email || !cep) {
    return false; // Missing required fields
  }

  if (!validateEmail(email)) {
    return false; // Invalid email format
  }

  return true; // Form data is valid
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  if (validateForm()) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const consentimento = document.getElementById("consentimento").checked;

    // Store form data in local storage
    localStorage.setItem(
      "churrascometroFormData",
      JSON.stringify({ nome, email, cep, consentimento })
    );

    // Perform calculations and display results
    const homens = parseInt(document.getElementById("homens").value) || 0;
    const mulheres = parseInt(document.getElementById("mulheres").value) || 0;
    const criancas = parseInt(document.getElementById("criancas").value) || 0;
    const bebidasAlcoolicas =
      parseInt(document.getElementById("bebidasAlcoolicas").value) || 0;

    // Calculate quantities for each item
    const quantidadeCarne = homens * 400 + mulheres * 300 + criancas * 200;
    const quantidadePaoDeAlho = homens * 10 + mulheres * 8 + criancas * 5;
    const quantidadeCerveja =
      homens * 3 + mulheres * 2 + criancas * 0.5 + bebidasAlcoolicas * 10;
    const quantidadeRefrigerante = homens * 2 + mulheres * 2 + criancas * 3;

    // Display results in a table
    const table = document.getElementById("resultado");
    table.innerHTML = `
      <tr>
        <td>Quantidade de carne:</td>
        <td>${quantidadeCarne}g</td>
      </tr>
      <tr>
        <td>Quantidade de pão de alho:</td>
        <td>${quantidadePaoDeAlho} unidades</td>
      </tr>
      <tr>
        <td>Quantidade de cerveja:</td>
        <td>${quantidadeCerveja} latas</td>
      </tr>
      <tr>
        <td>Quantidade de refrigerante:</td>
        <td>${quantidadeRefrigerante} litros</td>
      </tr>
    `;
  } else {
    // Display error message
    alert("Por favor, preencha todos os campos corretamente.");
  }
}

// Load form data from local storage
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nome").value = formData.nome || "";
  document.getElementById("email").value = formData.email || "";
  document.getElementById("cep").value = formData.cep || "";
  document.getElementById("consentimento").checked =
    formData.consentimento || true;
});

// Add event listener to form submission
document
  .getElementById("churrascometroForm")
  .addEventListener("submit", handleSubmit);
