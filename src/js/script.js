let profissionalSelecionado = ""; // guarda o nome da pessoa clicada

/* Pegamos os três parametros que colocamos la no Html, o display da div no Html está como, 'none' logo não aparece
quando clicamos recebe o valor flex, aparecendo na tela */
function popUp(nome, info) {
  document.getElementById("nomeCandidato").textContent = nome;
  document.getElementById("infoCandidato").textContent = info;
  document.getElementById("popUp").style.display = "flex";
  
  profissionalSelecionado = nome; // guarda o nome
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

//Array das profissões 
const profissionais = [
  {
    nome: "Psicóloga",
    descricao: "Profissional dedicada ao bem-estar emocional e ao desenvolvimento humano.",
    imagem: "src/assets/imgs/PROFISSOES_1.png",
    pagina: "src/pages/psicologa.html",
    skills: ["Empatia", "Comunicação", "Escuta ativa"]
  },
  {
    nome: "Professor",
    descricao: "Educador comprometido com o aprendizado e o crescimento de seus alunos.",
    imagem: "src/assets/imgs/PROFISSOES_2.png",
    pagina: "src/pages/professor.html",
    skills: ["Didática", "Paciência", "Organização"]
  },
  {
    nome: "Jornalista",
    descricao: "Especialista em comunicação, informação e cobertura de acontecimentos.",
    imagem: "src/assets/imgs/PROFISSOES_3.png",
    pagina: "src/pages/jornalista.html",
    skills: ["Escrita", "Investigação", "Curiosidade"]
  },
  {
    nome: "Contador",
    descricao: "Profissional experiente em gestão financeira, contabilidade e planejamento tributário.",
    imagem: "src/assets/imgs/PROFISSOES_4.png",
    pagina: "src/pages/contador.html",
    skills: ["Gestão financeira", "Excel", "Atenção aos detalhes"]
  },
  {
    nome: "Engenheira",
    descricao: "Formada em Engenharia Civil. Experiência em obras sustentáveis.",
    imagem: "src/assets/imgs/PROFISSOES_5.png",
    pagina: "src/pages/engenheira.html",
    skills: ["Planejamento", "Sustentabilidade", "Cálculo estrutural"]
  },
  {
    nome: "Veterinária",
    descricao: "Veterinária com foco em felinos.",
    imagem: "src/assets/imgs/PROFISSOES_6.png",
    pagina: "src/pages/veterinaria.html",
    skills: ["Cuidado animal", "Diagnóstico", "Amor pelos pets"]
  },
  {
    nome: "Médica",
    descricao: "Especialista em clínica geral e cuidados preventivos.",
    imagem: "src/assets/imgs/PROFISSOES_7.png",
    pagina: "src/pages/medica.html",
    skills: ["Empatia", "Diagnóstico", "Trabalho em equipe"]
  },
  {
    nome: "Bombeiro",
    descricao: "Profissional dedicado à segurança e resgate em emergências.",
    imagem: "src/assets/imgs/PROFISSOES_8.png",
    pagina: "src/pages/bombeiro.html",
    skills: ["Coragem", "Trabalho em equipe", "Primeiros socorros"]
  }
];
