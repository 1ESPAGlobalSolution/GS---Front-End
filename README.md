#  Talent Link

O **Talent Link** é uma plataforma colaborativa voltada para o futuro do trabalho, criada com o objetivo de **conectar profissionais de diferentes áreas**, destacando suas competências, experiências e propósitos.  
O projeto propõe uma interface intuitiva e moderna, permitindo interação entre usuários, descoberta de perfis e identificação de perfis profissionais por meio de um **quiz interativo**.

---

##  Estrutura de Diretórios

```
/
├── index.html
└── src/
    ├── assets/
    │   └── imgs/
    │       ├── banner.png
    │       ├── banner_1.png
    │       ├── banner_2.png
    │       ├── PROFISSOES_1.png
    │       ├── PROFISSOES_2.png
    │       ├── PROFISSOES_3.png
    │       ├── PROFISSOES_4.png
    │       ├── PROFISSOES_5.png
    │       ├── PROFISSOES_6.png
    │       ├── PROFISSOES_7.png
    │       └── PROFISSOES_8.png
    │
    ├── css/
    │   ├── amigos.css
    │   ├── animations.css
    │   ├── perfil.css
    │   ├── sobrenos.css
    │   └── style.css
    │
    ├── js/
    │   ├── perfil.js
    │   ├── quiz.js
    │   ├── script.js
    │   └── slideshow.js
    │
    └── pages/
        ├── afiliados.html
        ├── amigos.html
        ├── login.html
        ├── perfil.html
        ├── quiz.html
        └── sobrenos.html
```

---

##  Funcionalidades Principais

###  **Página Inicial (index.html)**
- Exibe um banner de destaque e uma área de busca.
- Mostra uma grade de **profissionais cadastrados** com imagens e descrições breves.
- Cada clique em uma imagem abre um **pop-up interativo** com informações detalhadas.
- Botão "Ver mais" direciona para a página de perfil individual.

###  **Amigos (amigos.html)**
- Mostra o número de **seguidores, seguindo e amigos**.
- Exibe convites de amizade com opção de “Aceitar”.
- Lista os amigos já adicionados com seus cargos.
- Interface dividida em blocos visuais bem definidos.

###  **Login e Registro (login.html)**
- Contém dois formulários:
  - **Registrar-se**: para novos usuários com campos de nome, data de nascimento e gênero.
  - **Login**: acesso rápido com e-mail e senha.
- Uso de formulários estilizados com `flexbox`.

###  **Perfil (perfil.html)**
- Página dinâmica que exibe as informações completas do profissional selecionado na home.
- Dados são carregados a partir do `localStorage`, controlados por `perfil.js`.
- Inclui foto, biografia, e lista de **skills**.

###  **Quiz (quiz.html)**
- Contém **4 perguntas de múltipla escolha** sobre comportamento e preferências no trabalho.
- Ao finalizar, o JavaScript (`quiz.js`) calcula o **perfil profissional** entre oito possíveis tipos:
  - Visionário Inovador  
  - Líder Estratégico  
  - Colaborador Empático  
  - Executor Pragmático  
  - Explorador Criativo  
  - Guardião da Estabilidade  
  - Conector Inspirador  
  - Aprendiz Contínuo
- Exibe o resultado com um botão “Ver mais”.

###  **Afiliados (afiliados.html)**
- Exibe um **slideshow automático** com informações pessoais e acadêmicas de profissionais parceiros.
- Botões interativos permitem recomendar profissionais e enviar mensagens.

###  **Sobre Nós (sobrenos.html)**
- Apresenta a missão e os valores do Talent Link.
- Enfatiza o propósito de **conectar talentos e promover colaboração** entre profissionais.

---

##  Tecnologias Utilizadas

- **HTML5** — estrutura semântica e organização das páginas.  
- **CSS3** — estilização responsiva, transições e animações.  
- **JavaScript (ES6)** — lógica de interação, armazenamento local e manipulação do DOM.  
- **LocalStorage API** — utilizada para guardar dados temporários (ex.: perfil selecionado).  
- **Flexbox** — para layout responsivo e centralização de elementos.  

---

##  Como Executar o Projeto

1. **Baixe ou clone o repositório:**

2. **Abra o arquivo principal:**
   - Navegue até o diretório do projeto e abra o arquivo `index.html` em qualquer navegador.

3. **Navegue pelas páginas:**
   - Use o menu superior para acessar as demais páginas (`Sobre Nós`, `Amigos`, `Quiz`, `Afiliados`, etc).

---

##  Destaques do Projeto

- Interface moderna e minimalista.  
- Interatividade através de pop-ups e quiz dinâmico.  
- Navegação fluida com animações leves e consistentes.  
- Uso de JavaScript para simular experiências reais de plataformas de networking profissional.  

---

##  Equipe de Desenvolvimento


| Integrante | RM | Função Principal |
|-------------|------------|----------------------|
| **Gabriel Ardito Manes** | 568318 | Desenvolvedor |
| **João Antonio Sarracine Faedrich de Souza** | 567407 | Desenvolvedor |
| **João Pedro Gonzales Camargo** | 568166 | Desenvolvedor |

---

## Link do Deploy no Github Pages

https://1espaglobalsolution.github.io/GS---Front-End/


---

## Link do Repositório no Github

https://github.com/1ESPAGlobalSolution/GS---Front-End
