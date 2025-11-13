//Array das profissões 
const profissionais = [
 {
  nome: "Ana Maria - Psicóloga",
  descricao: "Ana Maria, 34 anos, é uma psicóloga brasileira formada pela Universidade de São Paulo (USP). Atua há mais de 10 anos com foco em saúde emocional e desenvolvimento humano. Apaixonada por compreender o comportamento das pessoas, busca ajudar seus pacientes a encontrar equilíbrio entre razão e emoção. Nos momentos livres, gosta de ler sobre neurociência e praticar meditação.",
  imagem: "../assets/imgs/PROFISSOES_1.png",
  skills: ["Empatia", "Comunicação", "Escuta ativa"]
},
{
  nome: "Felipe Menezes - Professor",
  descricao: "Felipe Menezes, 41 anos, é um professor de História formado pela Universidade Federal de Minas Gerais (UFMG). Conhecido por sua didática envolvente, acredita que o conhecimento transforma realidades. Já trabalhou em escolas públicas e particulares, sempre incentivando o pensamento crítico e a curiosidade nos alunos. Nos fins de semana, gosta de visitar museus e tocar violão.",
  imagem: "../assets/imgs/PROFISSOES_2.png",
  skills: ["Didática", "Paciência", "Organização"]
},
{
  nome: "Maria Julia - Jornalista",
  descricao: "Maria Julia, 29 anos, é uma jornalista paulista formada pela PUC-SP. Atua na área de comunicação há 7 anos, com experiência em redação, reportagem e produção de conteúdo digital. Curiosa e observadora, acredita que a informação é uma ferramenta poderosa para a cidadania. É apaixonada por literatura e viagens culturais, e mantém um blog sobre comportamento e sociedade.",
  imagem: "../assets/imgs/PROFISSOES_3.png",
  skills: ["Escrita", "Investigação", "Curiosidade"]
},
{
  nome: "João Sarracine - Contador",
  descricao: "João Sarracine, 38 anos, é um contador formado pela Universidade Presbiteriana Mackenzie. Com mais de 15 anos de experiência em gestão financeira e tributária, auxilia empresas a tomarem decisões estratégicas com base em dados sólidos. Metódico e analítico, também é entusiasta de tecnologia aplicada à contabilidade. Fora do trabalho, gosta de ciclismo e de acompanhar o mercado financeiro.",
  imagem: "../assets/imgs/PROFISSOES_4.png",
  skills: ["Gestão financeira", "Excel", "Atenção aos detalhes"]
},
{
  nome: "Roberta Mamute - Engenheira",
  descricao: "Roberta Mamute, 33 anos, é engenheira civil formada pela Universidade Federal do Paraná (UFPR). Atua na área de construções sustentáveis e gerenciamento de obras. É comprometida com a inovação e com o uso de materiais ecológicos. Determinada e criativa, adora desenhar projetos arquitetônicos e explorar soluções verdes para cidades mais inteligentes. Nos tempos livres, viaja para conhecer construções históricas.",
  imagem: "../assets/imgs/PROFISSOES_5.png",
  skills: ["Planejamento", "Sustentabilidade", "Cálculo estrutural"]
},
{
  nome: "Manuela Sanchez - Veterinária",
  descricao: "Manuela Sanchez, 30 anos, é veterinária especializada em felinos. Formada pela Universidade Federal Rural do Rio de Janeiro (UFRRJ), dedica-se ao bem-estar animal e à medicina preventiva. Carismática e atenciosa, é muito querida pelos tutores de seus pacientes. Ama animais desde criança e, fora do consultório, se envolve em projetos de adoção e proteção animal. É apaixonada por fotografia de natureza.",
  imagem: "../assets/imgs/PROFISSOES_6.png",
  skills: ["Cuidado animal", "Diagnóstico", "Amor pelos pets"]
},
{
  nome: "Julia Santos - Médica",
  descricao: "Julia Santos, 36 anos, é médica clínica geral formada pela Universidade Federal do Rio de Janeiro (UFRJ). Trabalha na rede pública e privada, com foco em cuidados preventivos e atenção integral ao paciente. É reconhecida por sua empatia e escuta humanizada. Defensora de um estilo de vida saudável, pratica corrida e participa de campanhas de saúde comunitária. Nos momentos de descanso, aprecia cinema e literatura médica.",
  imagem: "../assets/imgs/PROFISSOES_7.png",
  skills: ["Empatia", "Diagnóstico", "Trabalho em equipe"]
},
{
  nome: "Matheus Olavo - Bombeiro",
  descricao: "Matheus Olavo, 32 anos, é bombeiro militar há 12 anos. Natural do Rio Grande do Sul, é formado em Educação Física e possui cursos de resgate e primeiros socorros avançados. Dedicado e corajoso, atua em operações de salvamento e combate a incêndios. É apaixonado pelo trabalho em equipe e pelo sentimento de servir à comunidade. Fora do quartel, gosta de trilhas, esportes radicais e voluntariado social.",
  imagem: "../assets/imgs/PROFISSOES_8.png",
  skills: ["Coragem", "Trabalho em equipe", "Primeiros socorros"]
}
];


//Chamamos a variavél que guardamos na memoria com o valor atualizado
const contador = localStorage.getItem("contagem");
console.log("Contador:", contador); 

/*A varivaél contador é atualizada cada vez que o usuário clica em alguma das fotos colocando o número nela, referente ao objeto no array */
let prof = profissionais[contador]
document.getElementById("nome").textContent = prof.nome
document.getElementById("descricao").textContent = prof.descricao
document.getElementById("skills").textContent = "Skills: " + prof.skills.join(", ");
document.getElementById("img").innerHTML = `<img src="${prof.imagem}" alt="${prof.nome}" width="300" style="border-radius: 15px;">`


