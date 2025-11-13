let profissionalSelecionado = ""; // guarda o nome da pessoa clicada
let contagem ='';
/* Pegamos os três parametros que colocamos la no Html, o display da div no Html está como, 'none' logo não aparece
quando clicamos recebe o valor flex, aparecendo na tela */
function popUp(nome, info, contador) {
  document.getElementById("nomeCandidato").textContent = nome;
  document.getElementById("infoCandidato").textContent = info;
  document.getElementById("popUp").style.display = "flex";
  
  
  profissionalSelecionado = nome; 
  //Precisamos armazenar no a varivael na memória para utilizarmos ela em outra página Html
  localStorage.setItem("contagem", contador);
}

function closePopUp() {
  document.getElementById("popUp").style.display = "none";
}

const botao = document.getElementById("botao");
if (botao) {
  botao.addEventListener("click", function() {
    window.location.href = `src/pages/perfil.html?nome=${encodeURIComponent(profissionalSelecionado)}`;
  });
}

