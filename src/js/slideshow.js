let slides = [
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <h3><strong>Nome: Henrique Bayer</strong></h3>
    <br>
    <p><strong>Idade:</strong> 22 anos</p>
    <p><strong>Soft Skill:</strong> Didático</p>
    <p><strong>Formação:</strong> Ciência da Computação - PUC-SP</p>
    <p><strong>Contato:</strong> bayerrr@email.com</p>
    `,
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <h3><strong>Nome: Gyovanna da Silva</strong></h3>
    <br>
    <p><strong>Idade:</strong> 21 anos</p>
    <p><strong>Soft Skill:</strong> Empatia</p>
    <p><strong>Formação:</strong> Relações Internacionais - UNIP</p>
    <p><strong>Contato:</strong> gigica@email.com</p>
    `,
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <h3><strong>Nome: Felipe Menezes</strong></h3>
    <br>
    <p><strong>Idade:</strong> 36 anos</p>
    <p><strong>Soft Skill:</strong> Proativo</p>
    <p><strong>Formação:</strong> Análise e Desenvolvimento de Sistemas - FIAP</p>
    <p><strong>Contato:</strong> fmenezes_@email.com</p>
    `,
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <h3><strong>Nome: Catarina Sanchez</strong></h3>
    <br>
    <p><strong>Idade:</strong> 27 anos</p>
    <p><strong>Soft Skill:</strong> Autoconfiança</p>
    <p><strong>Formação:</strong> Geologia - VUNESP</p>
    <p><strong>Contato:</strong> cathsanchez@email.com</p>
    `,
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <h3><strong>Nome: Livia Pereira</strong></h3>
    <br>
    <p><strong>Idade:</strong> 29 anos</p>
    <p><strong>Soft Skill:</strong> Resolução de problemas</p>
    <p><strong>Formação:</strong> Direito - FGV</p>
    <p><strong>Contato:</strong> lilipereira@email.com</p>
    `,
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <h3><strong>Nome: Matheus Albergaria</strong></h3>
    <br>
    <p><strong>Idade:</strong> 47 anos</p>
    <p><strong>Soft Skill:</strong> Inteligência Emocional</p>
    <p><strong>Formação:</strong> Economia - FECAP</p>
    <p><strong>Contato:</strong> albergaria.matheus@email.com</p>
    `,
    `
    <h2>Informações pessoais e acadêmicas</h2>
    <p><strong>Nome: Larissa Camargo</strong></p>
    <br>
    <p><strong>Idade:</strong> 40 anos</p>
    <p><strong>Soft Skill:</strong> Comunicativa</p>
    <p><strong>Formação:</strong> Engenharia de Alimentos - UFSCAR</p>
    <p><strong>Contato:</strong> laricamrg0203@email.com</p>
    `
];
let tempo = 3500; //3 segundos

let i = 0;

// function slideShow(){ 
//     document.getElementById("slide").src=slides[i];
//     i++;
//     if( i>= slides.length){
//         i=0;
//     }
//     setTimeout(slideShow, tempo);
// }

function slideShow() {
  const slideEl = document.getElementById("slideshow");
  slideEl.innerHTML = slides[i];   // aqui trocamos o conteúdo

  i++;
  if (i >= slides.length) {
    i = 0;
  }

  setTimeout(slideShow, tempo);
}

slideShow();