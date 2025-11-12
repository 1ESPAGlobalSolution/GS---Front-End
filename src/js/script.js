function popUp(nome, info) {
  document.getElementById("nomeCandidato").textContent = nome;
  document.getElementById("infoCandidato").textContent = info;
  document.getElementById("popUp").style.display = "flex";
}

function closePopUp() {
  document.getElementById("popUp").style.display = "none";
}