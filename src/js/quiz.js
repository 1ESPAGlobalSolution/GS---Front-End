document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let p1 = document.querySelector('input[name="pergunta1"]:checked');
    let p2 = document.querySelector('input[name="pergunta2"]:checked');
    let p3 = document.querySelector('input[name="pergunta3"]:checked');
    let p4 = document.querySelector('input[name="pergunta4"]:checked');

    if (!p1 || !p2 || !p3 || !p4) {
        alert("Por favor, responda todas as perguntas antes de enviar o quiz.");
        return;
    }

    let raciocinio = { logico: 0, criativo: 1, social: 2, pratico: 3};
    let feedback = { direto: 0, rapido: 1, veloz: 2, agil: 3};
    let ritmo = { calmo: 0, dinamico: 1, intenso: 2, estrategico: 3};
    let valores = { estabilidade: 0, liberdade: 1, impacto: 2, inovacao: 3};

    let indice =
        raciocinio[p1.value] * 64 +
        feedback[p2.value] * 16 +
        ritmo[p3.value] * 4 +
        valores[p4.value];

    let profissoes = [
        "Psicóloga', 'Profissional dedicada ao bem-estar emocional e ao desenvolvimento humano.'",
        "Professor', 'Educador comprometido com o aprendizado e o crescimento de seus alunos.'",
        "Jornalista', 'Especialista em comunicação, informação e cobertura de acontecimentos.'",
        "Contador', 'Profissional experiente em gestão financeira, contabilidade e planejamento tributário.'",
        "Engenheira', 'Formada em Engenharia Civil. Experiência em obras sustentáveis.'",
        "Veterinária', 'Veterinário com foco em aves e roedores.'",
        "Médica', 'Especialista em clínica geral e cuidados preventivos.'",
        "Bombeiro', 'Profissional dedicado à segurança e resgate em emergências.'",
        // Adicione mais profissões conforme necessário
    ];

    let tipoSelecionado = tipos[Math.floor(indice / 16)];

let resultadoDiv = document.createElement("div");
resultadoDiv.classList.add("resultado");

let linkProfissoes = {
    "Psicóloga": "https://www.vagas.com.br/profissoes/psicologo",
    "Professor": "https://www.vagas.com.br/profissoes/professor",
    "Jornalista": "https://www.vagas.com.br/profissoes/jornalista",
    "Contador": "https://www.vagas.com.br/profissoes/contador",
    "Engenheira": "https://www.vagas.com.br/profissoes/engenheiro-civil",
    "Veterinária": "https://www.vagas.com.br/profissoes/veterinario",
    "Médica": "https://www.vagas.com.br/profissoes/medico",
    "Bombeiro": "https://www.vagas.com.br/profissoes/bombeiro",
    // Adicione mais links conforme necessário
};

let nomeProfissao = Object.keys(linkProfissoes).find(nome => tipoSelecionado.includes(nome));
let link = nomeProfissao ? linkProfissoes[nomeProfissao] : "#";

resultadoDiv.innerHTML = `
    <h3>Sua profissão ideal é: </h3>
    <p><a href="${link}" target="_blank" class="link-profissao">${tipoSelecionado}</a></p>
`;

let container = document.getElementById("resultado-container");
container.innerHTML = "";
container.appendChild(resultadoDiv);
resultadoDiv.scrollIntoView({ behavior: "smooth"});
});
