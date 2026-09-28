const menuBtn = document.getElementById("menu-btn");
const menuNavegacao = document.getElementById("menu-navegacao");

menuBtn.addEventListener("click", function () {
    menuNavegacao.classList.toggle("menu-aberto");

    const menuEstaAberto =
        menuNavegacao.classList.contains("menu-aberto");

    menuBtn.setAttribute("aria-expanded", menuEstaAberto);
    if (menuEstaAberto) {
        menuBtn.innerHTML = "×";
        menuBtn.setAttribute("aria-label", "Fechar menu");
    } else {
        menuBtn.innerHTML = "☰";
        menuBtn.setAttribute("aria-label", "Abrir menu");
    } 
});

const linksMenu = menuNavegacao.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menuNavegacao.classList.remove("menu-aberto");
        menuBtn.innerHTML = "☰";

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Abrir menu");
    });
});

const formLogin = document.getElementById("form-login");

if (formLogin) {
    formLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const emailCadastrado = localStorage.getItem("email");
        if (email === emailCadastrado && senha === "Teste123") {
            localStorage.setItem("logado", "true");
            alert("Login realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("E-mail ou senha incorretos!");
        }
    });
}

const formCadastro = document.getElementById("form-cadastro");
if (formCadastro) {
    formCadastro.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome-completo").value;
        const email = document.getElementById("email-cadastro").value;
        const senha = document.getElementById("senha-cadastro").value;

    if (nome !== "" && email !== "" && senha === "Teste123") {
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Preencha todos os campos e utilize a senha de teste: Teste123");
        }
    });
}

const formDenuncia = document.getElementById("form-denuncia");
const formNovaDenuncia = document.getElementById("form-nova-denuncia");

function registrarDenuncia(event) {
    event.preventDefault();

    if (localStorage.getItem("logado") !== "true") {
        alert("Você precisa estar logado para registrar uma denúncia!");
        window.location.href = "login.html";
        return;
    }

    const titulo = document.getElementById("titulo").value;
    const categoria = document.getElementById("categoria").value;
    const bairro = document.getElementById("bairro").value;
    const descricao = document.getElementById("descricao").value;

    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");

    if (!nome || !email) {
        alert("Você precisa realizar o ligin novamente!")
        window.location.href = "login.html";
        return;
    }

    const denuncia = {
        protocolo: Date.now(),
        titulo: titulo,
        categoria: categoria,
        bairro: bairro,
        descricao: descricao,
        autor: nome,
        emailAutor: email,
        data: new Date().toLocaleDateString("pt-BR"),
        status: "Pendente"
        };

        const denuncias = JSON.parse(
            localStorage.getItem("denuncias")
        ) || [];
        denuncias.push(denuncia);

        localStorage.setItem(
            "denuncias",
            JSON.stringify(denuncias)
        );
        alert("Denúncia registrada com sucesso!");
        window.location.href = "minhas-denuncias.html";
        }

    if (formDenuncia) {
        formDenuncia.addEventListener("submit", registrarDenuncia);
        }
    if (formNovaDenuncia) {
        formNovaDenuncia.addEventListener("submit", registrarDenuncia);
    }

const btnSair = document.getElementById("btn-sair");
if (btnSair) {
    if (localStorage.getItem("logado") === "true") {
        btnSair.style.display = "block";
    } else {
        btnSair.style.display = "none";
    }
    btnSair.addEventListener("click", function(event) {
        event.preventDefault();
        localStorage.removeItem("logado");
        alert("Você saiu da sua conta!");
        window.location.href = "index.html";
    });
}

const linkLogin = document.getElementById("link-login");
if (linkLogin) {
    if (localStorage.getItem("logado") === "true") {
        linkLogin.style.display = "none";
    } else {
        linkLogin.style.display = "block";
    }
}

const listaDenuncias = document.getElementById("lista-denuncias");
if (listaDenuncias) {
    const denuncias = JSON.parse(
        localStorage.getItem("denuncias")
    ) || [];

    denuncias.forEach(function(denuncia) {
        const card = document.createElement("article");
        card.className = "card-denuncia";

        const titulo = document.createElement("h3");
        titulo.textContent = denuncia.titulo;
        card.appendChild(titulo);

        const protocolo = document.createElement("p");
        protocolo.textContent = "Protocolo: #" + denuncia.protocolo;
        card.appendChild(protocolo);

        const autor = document.createElement("p");
        autor.textContent = "Registrado por: " + denuncia.autor;
        card.appendChild(autor);

        const data = document.createElement("p");
        data.textContent = "Data: " + denuncia.data;
        card.appendChild(data);

        const categoria = document.createElement("p");
        categoria.textContent = "Categoria: " + denuncia.categoria;
        card.appendChild(categoria);

        const bairro = document.createElement("p");
        bairro.textContent = "Bairro / Endereço: " + denuncia.bairro;
        card.appendChild(bairro);

        const status = document.createElement("p");
        status.textContent = "Status: " + denuncia.status;
        card.appendChild(status);

        const descricao = document.createElement("p");
        descricao.textContent = "Descrição: " + denuncia.descricao;
        card.appendChild(descricao);
        listaDenuncias.appendChild(card);

    });
}
