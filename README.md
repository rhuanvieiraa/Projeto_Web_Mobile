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


# Tutorial da Construção da Página Principal - index.html
A página principal do projeto foi estruturada em **HTML5**, focada em acessibilidade, navegação fluida em dispositivos móveis e fácil integração com os arquivos CSS e JavaScript que serão incluídos no decorrer do projeto.

#### 1. Cabeçalho e Navegação (`<header>`)
Abre a página com a identidade do projeto e o menu de links essenciais.

* **`<body id="top">`**: Essa identificação permite o usuário volte até o topo da página.
* **`<img>`**: Exibe a logo principal da plataforma.
* **`<button id="menu-btn">`**: Botão preparado para acionar a navegação em telas menores (mobile).
* **`<nav>` e `<ul>`**: Estruturam os links de navegação interna (`#denuncia`, `#denuncias-recentes`) e externa (`login.html`).

<img width="544" height="211" alt="image" src="https://github.com/user-attachments/assets/c9e21a6a-8d75-4cd3-be34-9a4e6c96ca06" />

#### 2. Formulário de Ocorrências (`<section id="denuncia">`)
Seção interativa no `<main>` para que o morador possa registrar um problema direto da página inicial.

* **`<form id="form-denuncia">`**: Agrupa os campos onde o usuário colocará os dados da ocorrência.
* **`<select>`**: Cria a caixa de seleção para o usuário selecionar qual a categoria do problema (Asfalto, Iluminação, Lixo, etc.).
* **`<input type="file" accept="image/*">`**: Habilita o envio de imagem da ocorrência, compatível com a câmera e galeria do celular.
* **`required`**: Validação que impede o envio do formulário com campos em branco.
* * **`<label for="...">`**: Associa o texto ao seu campo de entrada correspondente através do atributo `for`.

<img width="1070" height="543" alt="image" src="https://github.com/user-attachments/assets/8ea25bb3-da40-46c4-9841-93a4ad38c517" />

#### 3. Mural de Denúncias Recentes (`<section id="denuncias-recentes">`)
Lista e exibe os problemas já reportados na comunidade para acompanhamento.

* **`<article class="card-denuncia">`**: Guarda cada denúncia individualmente de forma isolada.
* **`<strong>`**: Dá destaque nas partes mais importantes da publicação, como o bairro e o status (Pendente ou Resolvido).

<img width="732" height="351" alt="image" src="https://github.com/user-attachments/assets/c1534c7a-b342-45d9-9e7a-e03f583d0565" />

#### 4. Rodapé e Rolagem Interna (`<footer>`)
Final da página com informações do projeto e links úteis.

* **`&copy;`**: Utilizada para gerar o símbolo de copyright (©).
* **`<a href="#top">`**: Link que leva direto ao ID do topo da página, permitindo a função "Voltar ao Início" sem recarregar a tela.

<img width="521" height="123" alt="image" src="https://github.com/user-attachments/assets/40985a1f-d5c4-435e-8717-24585fa7b9f6" />


#### 5. O Papel da Tag `<main>` no Projeto
* **`<main>`**: A tag foi utilizada para separar de forma clara o conteúdo "exclusivo" da página daqueles que aparecem repetitivamente em todo o site, como o cabeçalho (`<header>`) e o rodapé (`<footer>`).

Trecho do código utilizado na main:

<img width="855" height="753" alt="image" src="https://github.com/user-attachments/assets/823e580e-ee14-475a-8616-4ca8a15458b9" />
