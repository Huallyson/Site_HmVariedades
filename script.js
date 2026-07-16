function trocarImagem(img) {

    const imagem = document.querySelector(".produto-imagem img");

    imagem.style.opacity = "0";

    setTimeout(() => {
        imagem.src = "./img_polo/" + img;
        imagem.style.opacity = "1";
    }, 200);
}

function selecionarCor(btn) {
    document.querySelectorAll(".cor")
    .forEach(c => c.classList.remove("ativa"));

    btn.classList.add("ativa");
}

//tamanho padrão
let tamanhoSelecionado = "M";

function selecionarTamanho(btn) {
    document.querySelectorAll(".tamanho button")
    .forEach(b => b.classList.remove("ativo"));

    btn.classList.add("ativo");

    tamanhoSelecionado = btn.innerText;
}

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


function EnviarWhatsApp() {

    if(carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let msg = "Olá! Quero comprar:%0A%0A";

    carrinho.forEach(item => {

        msg += `Produto: ${item.produto}%0A`;
        msg += `Tamanho: ${item.tamanho}%0A`;
        msg += `Quantidade: ${item.quantidade}%0A`;
        msg += `Preço: R$ ${item.preco}%0A%0A`;

    });

    let url = `https://wa.me/558185377245?text=${msg}`;

    window.open(url, "_blank");
}


function atualizarCarrinho() {
    let lista =
    document.getElementById("lista-carrinho");

    lista.innerHTML = "";
    carrinho.forEach(function(item){
        let produto = document.createElement("div");
        produto.classList.add("item-carrinho");

        produto.innerHTML=`

<div class="item-info">

<strong>${item.produto}</strong>

<span>Tamanho: ${item.tamanho}</span>

<span>Quantidade: ${item.quantidade}</span>

<span>R$ ${item.preco}</span>

</div>

<button>Excluir</button>

`;

lista.appendChild(produto);

    });

   
}