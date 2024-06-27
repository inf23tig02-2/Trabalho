const form = document.getElementById("contacto-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    Swal.fire({
      title: "Obrigado por nos Contactar!",
      text: "Entraremos em contacto consigo o mais breve possível!",
      icon: "success",
    });
  }
});

function validateForm() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || telefone === "" || email === "" || mensagem === "") {
    Swal.fire({
      title: "Erro!",
      text: "Por favor, preencha todos os campos do formulário.",
      icon: "error",
    });
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    Swal.fire({
      title: "Erro!",
      text: "Por favor, introduza um endereço de email válido.",
      icon: "error",
    });
    return false;
  }

  return true;
}
