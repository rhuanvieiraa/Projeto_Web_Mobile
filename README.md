# Projeto Web Mobile - Conecta Cidade
Aluno: Rhuan Vieira de Souza
RA: 10755828

Aluno: Caio Borges Morato
RA: 10437025

Aluno: Felipe Del Giudice Menezes
RA: 10726771

# Como surgiu a ideia?

A ideia do nosso projeto surgiu quando pensamos nos problemas que encontramos todos os dias pela cidade de São Paulo. Muitas vezes passamos por uma rua com um buraco, um poste com a luz queimada, falta de iluminação, problemas no asfalto, lixo acumulado, entre outras situações, e aquilo pode continuar assim por semanas ou até meses.

Como São Paulo é uma cidade muito grande, entendemos também que é difícil para o poder público saber tudo o que está acontecendo em cada bairro e em cada rua.

Foi daí que pensamos: e se existisse um lugar simples onde a própria população pudesse mostrar esses problemas e acompanhar o que aconteceu depois?

# Sobre a nossa ideia:

A proposta é criar um site de ajuda urbana, que funcione como um espaço de participação da comunidade.

Nele, uma pessoa que encontrar algum problema no seu bairro poderá fazer uma denúncia, informar onde está acontecendo e explicar a situação.

Essas denúncias ficarão reunidas em um tipo de fórum da comunidade, onde será possível visualizar os problemas que já foram registrados e acompanhar se eles foram atendidos ou se ainda continuam pendentes.

# Como Funciona?

Pessoa encontra um problema → Faz a denúncia no site → A ocorrência fica registrada → Outras pessoas podem visualizar → O problema pode ser acompanhado → A situação é atualizada como pendente ou resolvida.

# Objetivo desse projeto:

Nossa intenção não é apenas criar mais um lugar para fazer reclamações.
Queremos criar uma ferramenta que possa ajudar os dois lados: a população ganha uma maneira mais fácil de mostrar os problemas que enfrenta no dia a dia, enquanto o poder público pode ter acesso a essas informações de forma mais organizada e direta.

No final, a ideia é simples: usar a tecnologia para aproximar a comunidade do poder público e ajudar a melhorar, aos poucos, a cidade onde vivemos.


<img width="800" height="557" alt="image" src="https://github.com/user-attachments/assets/b226d7f2-8c37-44a4-b1bf-1d3d484dcbc0" />


# Tutorial da Construção da Página Principal - `index.html`

A página principal do projeto foi estruturada em **HTML5** semãntico, com foco em organização, acessibilidade, navegação em dispositivos móveis e integração com os arquivos CSS e JavaScript que serão adicionados durante o desenvolvimento do projeto.

## 1. Estrutura Compartilhada entre as Páginas

Todas as páginas do projeto utilizam o mesmo padrão de cabeçalho e rodapé, mantendo a identidade visual e a navegação do Conecta Cidade.

### Cabeçalho (`<header>`)

O cabeçalho apresenta a logo do projeto e os principais links de navegação.

- **`<img>`**: Exibe a logo do Conecta Cidade.
- **`<button id="menu-btn">`**: Cria o botão utilizado no menu mobile.
- **`<nav id="menu-navegacao">`**: Define a área de navegação.
- **`<ul>`**: Organiza os links do menu.
- **`<a>`**: Cria links para as páginas do projeto.

<img width="460" height="280" alt="image" src="https://github.com/user-attachments/assets/30b8d19b-eaeb-4d63-8ca8-3c6e26da8fba" />


O mesmo cabeçalho é reutilizado nas páginas `index.html`, `denuncia.html`, `minhas-denuncias.html` e `login.html`.

### Rodapé (`<footer>`)

O rodapé aparece no final das páginas e apresenta informações do projeto e links úteis.

- **`<footer>`**: Define a parte final da página.
- **`<div class="footer-links">`**: Agrupa os links do rodapé.
- **`<a href="#top">`**: Permite voltar ao início da página.
- **`&copy;`**: Gera o símbolo de copyright (`©`).

<img width="437" height="138" alt="image" src="https://github.com/user-attachments/assets/de9c05bb-f21c-48d7-845b-dd2bcb0cf079" />

O mesmo padrão de rodapé é utilizado em todas as páginas do projeto.

# Página Principal - `index.html`

## 1. Seção de Apresentação (`<section class="apresentacao">`)

Essa seção apresenta rapidamente ao usuário a proposta do Conecta Cidade.

- **`<section>`**: Separa essa área das outras partes da página.
- **`<div class="apresentacao-conteudo">`**: Agrupa o conteúdo da apresentação.
- **`<h1>`**: Exibe a mensagem principal.
- **`<p>`**: Resume o objetivo do projeto.
- **`<a>`**: Direciona o usuário para o registro de uma ocorrência.

<img width="931" height="593" alt="image" src="https://github.com/user-attachments/assets/e8ec4d0f-a457-4643-99ff-edc22c170d11" />

## 2. Área de Conteúdo (`<section class="area-conteudo">`)

Agrupa as denúncias recentes e a seção "Sobre Nós".

- **`<div id="denuncias-recentes">`**: Guarda as denúncias exibidas na página.
- **`<article class="card-denuncia">`**: Representa uma denúncia.
- **`<aside class="sobre-nos">`**: Apresenta informações complementares sobre o projeto.

<img width="611" height="474" alt="image" src="https://github.com/user-attachments/assets/5cc46b08-ae65-41c8-b534-15f4810fc5b1" />

## 3. Formulário de Ocorrência (`<section id="denuncia">`)

Permite que o usuário informe os dados de uma ocorrência.

- **`<form id="form-denuncia">`**: Agrupa os campos do formulário.
- **`<label>`**: Mostra o nome de cada campo.
- **`<input>`**: Permite inserir informações.
- **`<select>`**: Permite selecionar a categoria.
- **`<textarea>`**: Permite escrever uma descrição.
- **`<button type="submit">`**: Envia o formulário.

<img width="837" height="436" alt="image" src="https://github.com/user-attachments/assets/d9c47c0e-dd55-4807-97e8-3e120f4a8230" />

# Página de Nova Denúncia - `denuncia.html`

## 4. Formulário de Nova Ocorrência

Essa página possui um formulário específico para o registro de novas denúncias.

- **`<form id="form-nova-denuncia">`**: Agrupa os campos da ocorrência.
- **`<input type="text">`**: Recebe título e endereço.
- **`<select>`**: Permite escolher a categoria.
- **`<input type="file">`**: Permite selecionar uma imagem.
- **`<textarea>`**: Recebe a descrição do problema.
- **`required`**: Torna os campos obrigatórios.
- **`<button type="submit">`**: Publica a ocorrência.

<img width="855" height="432" alt="image" src="https://github.com/user-attachments/assets/79e1088b-5588-40ec-8e39-6e5612234290" />

## 5. Proteção do Registro de Ocorrências

A página de nova denúncia foi preparada para funcionar em conjunto com o JavaScript.

O formulário possui identificadores específicos que permitem verificar se o usuário está logado antes de registrar uma ocorrência.

A lógica responsável por essa verificação e pelo armazenamento das denúncias será explicada na seção de JavaScript.

<img width="559" height="191" alt="image" src="https://github.com/user-attachments/assets/c6a3390b-1ef8-4b97-98e0-4b0d4aa6d929" />

# Página Minhas Denúncias - `minhas-denuncias.html`

## 6. Histórico de Ocorrências (`<section id="historico">`)

Essa seção apresenta as denúncias registradas.

- **`<section id="historico">`**: Agrupa o histórico.
- **`<article class="card-denuncia">`**: Representa cada ocorrência.
- **`<h3>`**: Exibe o título.
- **`<p>`**: Exibe protocolo, data, status e descrição.
- **`<div id="lista-denuncias">`**: Área utilizada para receber denúncias criadas através do JavaScript.

<img width="828" height="334" alt="image" src="https://github.com/user-attachments/assets/47d2f891-0971-4423-a399-a63227f0cd9e" />

# Página de Login - `login.html`

## 7. Área de Login e Cadastro

A página permite que o usuário faça login ou crie uma conta simulada.

### Formulário de Login

- **`<form id="form-login">`**: Agrupa os campos de acesso.
- **`<input type="email">`**: Recebe o e-mail.
- **`<input type="password">`**: Recebe a senha.
- **`<button type="submit">`**: Realiza o login.

<img width="712" height="304" alt="image" src="https://github.com/user-attachments/assets/378e19b5-f517-4557-ad5a-2996bd1a0900" />

### Formulário de Cadastro

- **`<form id="form-cadastro">`**: Agrupa os dados do cadastro.
- **`<input type="text">`**: Recebe o nome.
- **`<input type="email">`**: Recebe o e-mail.
- **`<input type="password">`**: Recebe a senha.
- **`<button type="submit">`**: Realiza o cadastro.

<img width="743" height="246" alt="image" src="https://github.com/user-attachments/assets/0b5b70e6-e84b-461f-b28a-664191582bf3" />

# Estilização das Páginas com CSS

O arquivo `style.css` foi criado para definir a identidade visual e organizar a aparência das páginas do Conecta Cidade.

Como todas as páginas utilizam o mesmo arquivo CSS, foi possível manter o mesmo padrão de cores, cabeçalho, rodapé, formulários e responsividade em todo o projeto.

## 1. Configurações Gerais

No início do arquivo foram definidas algumas configurações utilizadas em todas as páginas.

- **`*`**: Remove margens e espaçamentos padrão dos elementos e facilita o controle das dimensões.
- **`:root`**: Guarda as principais cores utilizadas no projeto através de variáveis CSS.
- **`body`**: Define a fonte, a cor de fundo e a cor padrão dos textos.
- **`scroll-behavior: smooth`**: Faz a navegação interna da página acontecer de forma suave.

As variáveis de cores permitem reutilizar a mesma identidade visual em diferentes partes do site.

Exemplo:

`--azul-escuro`, `--azul-principal`, `--amarelo`, `--branco` e `--cinza-borda`.

<img width="303" height="277" alt="image" src="https://github.com/user-attachments/assets/a9e62fbc-0a10-41fa-8b1d-5c44fab5f5b4" />

Dica dada pelo professor substituto.

## 2. Identidade Visual

A identidade visual foi construída principalmente utilizando tons de azul, branco e amarelo.

- **Azul escuro**: utilizado no cabeçalho, rodapé e títulos.
- **Azul principal**: utilizado em botões e elementos de destaque.
- **Amarelo**: utilizado em pequenos detalhes visuais.
- **Branco**: utilizado nos cards e formulários.
- **Azul claro**: utilizado como fundo das páginas.

Essas cores foram escolhidas para manter relação com a logo criada para o Conecta Cidade.

---

## 3. Cabeçalho e Navegação

O cabeçalho foi estilizado para manter a identidade visual em todas as páginas.

Foram utilizados:

- **`display: flex`**: organiza a logo e o menu na mesma linha.
- **`align-items`**: alinha os elementos verticalmente.
- **`justify-content: space-between`**: separa a logo dos links de navegação.
- **`padding`**: cria espaço interno no cabeçalho.
- **`background-color`**: aplica o azul escuro utilizado na identidade visual.

Os links receberam cores e um efeito simples de `hover`, mudando para amarelo quando o usuário passa o mouse.

<img width="321" height="453" alt="image" src="https://github.com/user-attachments/assets/bab7cb8a-fb0c-4be2-a4b1-360fed6b70cb" />

## 4. Seção de Apresentação

A página principal possui uma área de apresentação com uma imagem de fundo.

Foram utilizados:

- **`background-image`**: adiciona a imagem da cidade e uma camada de cor sobre ela.
- **`background-size: cover`**: faz a imagem ocupar toda a área.
- **`background-position: center`**: centraliza a imagem.
- **`padding`**: cria espaçamento ao redor do conteúdo.
- **`color`**: utiliza texto branco para melhorar a leitura sobre a imagem.

O botão principal utiliza azul e um detalhe amarelo para manter o padrão visual do projeto.

<img width="602" height="683" alt="image" src="https://github.com/user-attachments/assets/689322bd-67c0-4bd8-a43b-54c534b3df08" />

## 5. Cards de Denúncia

As denúncias são exibidas através de cards.

Os principais estilos utilizados foram:

- **`background-color`**: fundo branco.
- **`border`**: cria uma borda leve.
- **`border-radius`**: deixa os cantos arredondados.
- **`padding`**: cria espaço interno.
- **`margin-bottom`**: separa um card do outro.

Os títulos das denúncias utilizam a cor azul principal para ganhar destaque.

A mesma classe `card-denuncia` também é utilizada pelos cards criados dinamicamente com JavaScript.

<img width="292" height="266" alt="image" src="https://github.com/user-attachments/assets/a6a4bb07-daf4-40fc-9372-455e37199b41" />

## 6. Seção Sobre Nós

A seção "Sobre Nós" foi estilizada como um card complementar.

Ela utiliza:

- fundo branco;
- cantos arredondados;
- espaçamento interno;
- detalhe amarelo na parte superior;
- textos em tons de azul e cinza.

Essa área foi posicionada ao lado das denúncias recentes na versão para computador.

<img width="292" height="326" alt="image" src="https://github.com/user-attachments/assets/9dfc849d-80c3-4c44-b7c3-273454e04736" />

## 7. Formulários

Os formulários das páginas seguem o mesmo padrão visual.

Os campos `input`, `select` e `textarea` receberam:

- largura de `100%`;
- espaçamento interno;
- borda cinza;
- cantos arredondados;
- fundo branco.

Os botões utilizam a cor azul principal e mudam de cor quando o usuário passa o mouse.

Também foi utilizada uma pequena animação com `transform: translateY()` para dar movimento aos botões durante o `hover`.

<img width="359" height="533" alt="image" src="https://github.com/user-attachments/assets/c0b1b2d5-6f65-4000-a208-d83e5b524050" />

## 8. Página de Login

A página de login possui duas áreas principais:

- acesso à conta;
- criação de uma nova conta.

Os dois formulários foram organizados lado a lado em telas maiores através de `display: flex`.

Cada formulário foi colocado dentro de um card branco com:

- `padding`;
- `border-radius`;
- detalhe amarelo;
- campos ocupando toda a largura disponível.

<img width="302" height="628" alt="image" src="https://github.com/user-attachments/assets/da8e697f-94b8-4e46-8fba-1718870f1a84" />

<img width="277" height="499" alt="image" src="https://github.com/user-attachments/assets/d6cdb8cb-b3a4-4467-a525-072a38419432" />

## 9. Página de Nova Denúncia

A página `denuncia.html` recebeu uma estilização específica através da classe `pagina-denuncia`.

Foi utilizada uma largura máxima para evitar que os campos ocupassem toda a tela.

As principais propriedades foram:

- **`width`**: controla a largura da página.
- **`max-width`**: limita o tamanho máximo do formulário.
- **`margin: auto`**: centraliza o conteúdo.

<img width="313" height="263" alt="image" src="https://github.com/user-attachments/assets/5c535e2f-171f-4442-9d3e-7399fbac397b" />

## 10. Histórico de Denúncias

A página `minhas-denuncias.html` também recebeu uma largura máxima para manter os cards centralizados.

A seção `historico` organiza as ocorrências e reutiliza a mesma classe `card-denuncia`.

Os status também possuem estilos próprios para diferenciar ocorrências pendentes e resolvidas.

<img width="247" height="253" alt="image" src="https://github.com/user-attachments/assets/e04ba52e-e9da-48af-85f0-524ca35fcdaf" />

## 11. Rodapé

O rodapé utiliza o mesmo azul escuro do cabeçalho.

Os elementos foram centralizados utilizando `flex`.

Os links também possuem efeito de `hover`, mudando para amarelo.

Além disso, o `body` foi configurado para ocupar toda a altura da tela, permitindo que o rodapé permaneça na parte inferior mesmo em páginas com pouco conteúdo.

<img width="404" height="494" alt="image" src="https://github.com/user-attachments/assets/ee3d3807-55bb-4ea6-8b59-c67516f68f84" />

## 12. Responsividade com `@media`

Para adaptar o projeto a dispositivos móveis, foi utilizado:

`@media (max-width: 768px)`

Dentro dessa regra, alguns elementos mudam de comportamento.

Entre as principais alterações estão:

- redução do tamanho da logo;
- exibição do botão de menu mobile;
- menu de navegação em formato vertical;
- redução do tamanho dos títulos;
- cards e formulários ocupando toda a largura disponível;
- áreas que aparecem lado a lado no computador passam a aparecer uma abaixo da outra.

Também foi adicionada uma transição suave ao menu mobile utilizando `max-height`, `opacity` e `transition`.

<img width="434" height="787" alt="image" src="https://github.com/user-attachments/assets/9c5fe201-6da2-47b1-b7d5-3b2582f7c509" />

<img width="438" height="800" alt="image" src="https://github.com/user-attachments/assets/a5e1050f-e432-4d58-a46f-10ea8dbc2ef1" />

## 13. Efeitos e Transições

Foram utilizadas pequenas interações visuais para melhorar a experiência do usuário.

Entre elas:

- alteração de cor dos links com `:hover`;
- mudança de cor dos botões;
- movimento dos botões utilizando `transform: translateY()`;
- transição suave no menu mobile;
- rolagem suave através de `scroll-behavior: smooth`.

Esses efeitos foram mantidos simples para não deixar o projeto visualmente carregado.

# Interações e Funcionalidades com JavaScript

O arquivo `script.js` foi utilizado para adicionar interações às páginas do Conecta Cidade.

As principais funcionalidades implementadas foram:

- menu mobile;
- cadastro simulado;
- login;
- logout;
- verificação de acesso para registro de denúncias;
- armazenamento das denúncias no navegador;
- criação dinâmica dos cards de ocorrência.

---

## 1. Menu Mobile

O JavaScript controla a abertura e o fechamento do menu em dispositivos móveis.

Foram utilizados:

- **`getElementById()`**: localiza o botão e o menu através dos seus identificadores.
- **`addEventListener()`**: detecta o clique no botão.
- **`classList.toggle()`**: adiciona ou remove a classe `menu-aberto`.
- **`classList.contains()`**: verifica se o menu está aberto.
- **`setAttribute()`**: atualiza atributos do botão.
- **`forEach()`**: aplica uma ação em todos os links do menu.

Quando o usuário clica no botão ☰, a classe `menu-aberto` é adicionada ao menu. Ao clicar novamente, essa classe é removida.

O símbolo do botão também muda entre `☰` e `×`.

<img width="487" height="288" alt="image" src="https://github.com/user-attachments/assets/0a65d955-addd-40cf-8b8d-350540387cb4" />

## 2. Cadastro Simulado

O formulário de cadastro utiliza JavaScript para armazenar algumas informações do usuário no navegador.

São armazenados:

- nome;
- e-mail.

Foi utilizado o **`localStorage`**, que permite guardar informações no navegador.

Exemplo de comando utilizado:

`localStorage.setItem()`

O cadastro também verifica se os campos foram preenchidos e utiliza uma senha de teste definida para o projeto.

<img width="555" height="271" alt="image" src="https://github.com/user-attachments/assets/57a8372c-648d-404f-b341-1a8fac6579cb" />

## 3. Login Simulado

O formulário de login verifica se o e-mail informado corresponde ao e-mail salvo durante o cadastro.

Também é feita a comparação com a senha de teste utilizada no projeto.

Quando os dados estão corretos, o JavaScript salva:

`logado = true`

no `localStorage`.

Depois disso, o usuário é direcionado para a página principal.

Foram utilizados:

- **`getItem()`**: recupera informações armazenadas.
- **`setItem()`**: salva o estado de login.
- **`window.location.href`**: redireciona o usuário para outra página.
- **`alert()`**: apresenta mensagens de confirmação ou erro.

<img width="468" height="306" alt="image" src="https://github.com/user-attachments/assets/0b9fd03a-65dd-4414-ae88-f955b60edb9c" />


## 4. Logout

Foi criado um botão "Sair" para encerrar a sessão simulada do usuário.

Quando o botão é clicado, o JavaScript remove o estado de login através de:

`localStorage.removeItem("logado")`

Depois disso, o usuário é direcionado novamente para a página inicial.

O JavaScript também controla a exibição dos links "Login" e "Sair".

Quando o usuário está conectado, o link "Login" fica oculto e o botão "Sair" é exibido.

<img width="434" height="226" alt="image" src="https://github.com/user-attachments/assets/be6fe4b4-b87f-41cb-978b-55fa16797784" />

## 5. Verificação de Login para Registrar Denúncias

Antes de permitir o registro de uma ocorrência, o JavaScript verifica se o usuário está logado.

A verificação é feita através do valor armazenado no `localStorage`.

Caso o usuário não esteja conectado:

- uma mensagem é apresentada;
- o usuário é direcionado para a página de login.

Caso esteja conectado, o registro da denúncia pode continuar.

Essa verificação é utilizada tanto no formulário da página principal quanto na página específica de nova denúncia.

<img width="490" height="137" alt="image" src="https://github.com/user-attachments/assets/2155e36d-00c2-4893-8a87-32c6f458bf53" />

## 6. Registro das Denúncias

Quando uma denúncia é enviada, o JavaScript coleta as informações preenchidas no formulário.

São armazenados dados como:

- título;
- categoria;
- bairro ou endereço;
- descrição;
- nome do usuário;
- e-mail do usuário;
- data;
- protocolo;
- status.

Cada ocorrência é criada como um objeto JavaScript.

O protocolo é gerado utilizando:

`Date.now()`

A data é gerada automaticamente através de:

`new Date().toLocaleDateString("pt-BR")`

Toda nova ocorrência começa com o status:

`Pendente`

  <img width="554" height="182" alt="image" src="https://github.com/user-attachments/assets/ed29ebe2-ed9b-45b6-9712-9b832c4b32bc" />

## 7. Uso de JSON e `localStorage`

Como o `localStorage` armazena informações no formato de texto, foi necessário utilizar JSON para guardar uma lista de denúncias.

Foram utilizados:

- **`JSON.stringify()`**: transforma a lista de denúncias em texto para armazená-la.
- **`JSON.parse()`**: transforma o texto armazenado novamente em dados que o JavaScript consegue utilizar.

As denúncias são armazenadas utilizando a chave:

`denuncias`

Antes de salvar uma nova ocorrência, o JavaScript recupera as denúncias anteriores e adiciona o novo registro à lista.

<img width="488" height="316" alt="image" src="https://github.com/user-attachments/assets/1c2b44d1-144a-4b16-8d42-3078f3d1584a" />


> **Observação:** O uso de JSON nessa etapa foi implementado com auxílio de Inteligência Artificial, utilizada como ferramenta de apoio para entender como armazenar vários registros no `localStorage`.

# Conclusão

O desenvolvimento do Conecta Cidade permitiu aplicar, na prática, os conhecimentos de HTML5, CSS3 e JavaScript em um projeto com proposta de impacto social.

Durante a construção do site, foram trabalhados conceitos como:

- criação de páginas estruturadas com HTML;
- estilização e responsividade com CSS;
- interação com formulários;
- manipulação de elementos com JavaScript;
- armazenamento de informações com `localStorage`;
- criação dinâmica de conteúdos na página.

A experiência ajudou o grupo a compreender melhor a integração entre HTML, CSS e JavaScript e como essas tecnologias podem ser utilizadas em conjunto para construir uma aplicação web funcional.
