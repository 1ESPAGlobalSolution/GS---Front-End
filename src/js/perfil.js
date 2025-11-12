// Pega o nome do profissional da URL (ex: ?nome=Psicóloga)
const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");

// Encontra o profissional correspondente no array
const profissional = profissionais.find(p => p.nome === nome);

// Pega o container onde o conteúdo vai aparecer
const container = document.getElementById("perfil");

// Se encontrou o profissional, mostra as informações
if (profissional) {
  container.innerHTML = `
    <section style="text-align: center; margin-top: 50px;">
      <img src="${profissional.imagem}" alt="${profissional.nome}" style="width:250px; border-radius:12px;">
      <h2>${profissional.nome}</h2>
      <p>${profissional.descricao}</p>
      <h3>Principais habilidades:</h3>
      <ul>
        ${profissional.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
      <a href="index.html" style="display:inline-block; margin-top:20px;">⬅ Voltar</a>
    </section>
  `;
} else {
  // Caso o nome não exista
  container.innerHTML = `<p style="text-align:center; margin-top:50px;">Profissional não encontrado.</p>`;
}
