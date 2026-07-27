// ==========================
// TROCA DE IMAGEM
// ==========================

function trocarImagem(img) {

    const imagem = document.querySelector(".produto-imagem img");

    imagem.style.opacity = "0";

    setTimeout(() => {
        imagem.src = "./img_polo/" + img;
        imagem.style.opacity = "1";
    }, 200);

}

// ==========================
// SELEÇÃO DE COR
// ==========================

function selecionarCor(btn) {

    document.querySelectorAll(".cor")
        .forEach(c => c.classList.remove("ativa"));

    btn.classList.add("ativa");

}

// ==========================
// TAMANHO
// ==========================

// tamanho padrão
let tamanhoSelecionado = "M";

// deixa o botão M selecionado quando abrir a página
window.onload = function () {

    const botoes = document.querySelectorAll(".tamanho button");

    botoes.forEach(btn => {

        if (btn.innerText === "M") {
            btn.classList.add("ativo");
        }

    });

};

function selecionarTamanho(btn) {

    document.querySelectorAll(".tamanho button")
        .forEach(b => b.classList.remove("ativo"));

    btn.classList.add("ativo");

    tamanhoSelecionado = btn.innerText;

}

// ==========================
// CARRINHO
// ==========================

let carrinho = [];

function adicionarCarrinho() {

    let produto = "Polo Premium Preta";

    let preco = 129.90;

    let quantidade = Number(
        document.querySelector("input[type='number']").value
    );

    if (quantidade <= 0 || isNaN(quantidade)) {

        alert("Informe uma quantidade válida.");

        return;

    }

    let item = {

        produto,
        preco,
        tamanho: tamanhoSelecionado,
        quantidade

    };

    carrinho.push(item);

    atualizarCarrinho();

    document.querySelector(".mensagem-carrinho").innerText =
        "Produto adicionado ao carrinho!";

}

// ==========================
// ATUALIZA CARRINHO
// ==========================

function atualizarCarrinho() {

    let lista = document.getElementById("lista-carrinho");

    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(function (item, indice) {

        total += item.preco * item.quantidade;

        let produto = document.createElement("div");

        produto.classList.add("item-carrinho");

        produto.innerHTML = `

            <div class="item-info">

                <strong>${item.produto}</strong>

                <span>Tamanho: ${item.tamanho}</span>

                <span>Quantidade: ${item.quantidade}</span>

                <span>Preço Unitário: R$ ${item.preco.toFixed(2).replace(".", ",")}</span>

                <span>Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</span>

            </div>

            <button onclick="removerItem(${indice})">
                Excluir
            </button>

        `;

        lista.appendChild(produto);

    });

    document.getElementById("total").innerText =
        total.toFixed(2).replace(".", ",");

}

// ==========================
// REMOVER ITEM
// ==========================

function removerItem(indice) {

    carrinho.splice(indice, 1);

    atualizarCarrinho();

}

// ==========================
// WHATSAPP
// ==========================

function EnviarWhatsApp() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;

    }

    let msg = "Olá! Quero comprar:%0A%0A";

    let total = 0;

    carrinho.forEach(item => {

        let subtotal = item.preco * item.quantidade;

        total += subtotal;

        msg += `Produto: ${item.produto}%0A`;
        msg += `Tamanho: ${item.tamanho}%0A`;
        msg += `Quantidade: ${item.quantidade}%0A`;
        msg += `Preço Unitário: R$ ${item.preco.toFixed(2).replace(".", ",")}%0A`;
        msg += `Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}%0A`;
        msg += `%0A`;

    });

    msg += "------------------------%0A";
    msg += `TOTAL: R$ ${total.toFixed(2).replace(".", ",")}`;

    let url = `https://wa.me/5581985377245?text=${msg}`;

    window.open(url, "_blank");

}
