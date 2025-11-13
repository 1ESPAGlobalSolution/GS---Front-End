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

    
    let raciocinio = { logico: 0, criativo: 1, social: 2, pratico: 3 };
    let feedback = { direto: 0, rapido: 1, veloz: 2, agil: 3 };
    let ritmo = { calmo: 0, dinamico: 1, intenso: 2, estrategico: 3 };
    let valores = { estabilidade: 0, liberdade: 1, impacto: 2, inovacao: 3 };

    
    let indice =
        raciocinio[p1.value] * 64 +
        feedback[p2.value] * 16 +
        ritmo[p3.value] * 4 +
        valores[p4.value];

    
    let perfis = [
        { nome: "Visionário Inovador", descricao: "Criativo e curioso, sempre busca novas formas de melhorar processos e encontrar soluções diferentes." },
        { nome: "Líder Estratégico", descricao: "Analítico e ótimo em coordenar equipes, gosta de ver o todo e traçar planos claros." },
        { nome: "Colaborador Empático", descricao: "Valoriza relações humanas, comunicação e o bem-estar coletivo no ambiente de trabalho." },
        { nome: "Executor Pragmático", descricao: "Focado em resultados e prazos, prefere ações diretas e objetivas." },
        { nome: "Explorador Criativo", descricao: "Entusiasta por desafios e ideias originais, vê o mundo sob uma nova perspectiva." },
        { nome: "Guardião da Estabilidade", descricao: "Gosta de rotina e segurança, focado na qualidade e consistência do que entrega." },
        { nome: "Conector Inspirador", descricao: "Ama trabalhar com pessoas e conectar talentos, valorizando propósito e colaboração." },
        { nome: "Aprendiz Contínuo", descricao: "Movido pela curiosidade e desejo de evoluir, está sempre buscando novos conhecimentos." }
    ];

    
    let perfilSelecionado = perfis[indice % perfis.length];

    
    let resultadoDiv = document.createElement("div");
    resultadoDiv.classList.add("resultado");

    resultadoDiv.innerHTML = `
        <h3>Seu perfil profissional é:</h3>
        <p class="perfil-nome">${perfilSelecionado.nome}</p>
        <p class="perfil-descricao">${perfilSelecionado.descricao}</p>
        <button class="ver-mais">Ver mais</button>
    `;

    
    let container = document.getElementById("resultado-container");
    container.innerHTML = "";
    container.appendChild(resultadoDiv);

    
    resultadoDiv.scrollIntoView({ behavior: "smooth" });
});
