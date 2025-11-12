let paginaDestino = ""; // variável global para guardar o link

function popUp(nome, info, pagina) {
  document.getElementById("nomeCandidato").textContent = nome;
  document.getElementById("infoCandidato").textContent = info;
  document.getElementById("popUp").style.display = "flex";

  // guarda o link que o botão vai usar
  paginaDestino = pagina;
}

function closePopUp() {
  document.getElementById("popUp").style.display = "none";
}

// quando clicar no botão "Ver mais", vai pra página
document.getElementById("botao").addEventListener("click", function() {
  if (paginaDestino) {
    window.location.href = paginaDestino; // redireciona
  }
});
