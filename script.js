function trocarImagem(img) {
    document.querySelector(".produto-imagem img").src = "./img_polo/" + img;
}

//tamanho padrão
let tamanhoSelecionado = "M";

function selecionarTamanho(btn) {
    document.querySelectorALL(".tamanho button")
    .forEach(b => b.classList.remove("ativo"));

    btn.classList.add("ativo");

    tamanhoSelecionado = btn.innerText;
}

function EnviarWhatsApp() {
    let produto = "Polo Premium Preta";
    let preco = "129,90";
    let quantidade = document.querySelector("input[type='number']").value;

    let msg = `Olá! Quero comprar:

    Produto: ${produto}
    Tamanho: ${tamanhoSelecionado}
    Quantidade: ${quantidade}
    Preço: R$ ${preco}`;

    let url = `https://wa.me/5581999999999?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
}