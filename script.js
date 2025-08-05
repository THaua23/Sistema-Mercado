let notinha = [];

let nomeInput = document.getElementById("nome-produto")
let valorInput = document.getElementById("valor-produto")
let quantidadeInput = document.getElementById("quantidade-produto")

let totalFinal = 0

// fução responsável por adicionar o produto
function adicionarProduto() {

    let nome = nomeInput.value
    let valor = Number(valorInput.value)
    let quantidade = Number(quantidadeInput.value)

    if (nome == "" || valor == "" || quantidade == "") {
        atualizarNotinha()
        alert("preencha todos os campos!")
    } else {
        dadosProduto = {
            quantidade: quantidade,
            nome: nome,
            valor: valor,
        }

        notinha.push(dadosProduto)
        atualizarNotinha()
    }
}

// fução responsável por atualizar a notinha
function atualizarNotinha() {
    nomeInput.value = ""
    quantidadeInput.value = ""
    valorInput.value = ""

    let listaProdutos = document.getElementById("lista-produtos")
    listaProdutos.innerHTML = ''

    for (let i = 0; i < notinha.length; i++) {

        let item = document.createElement("li")

        let produto = notinha[i]
        let valorTotal = produto.valor * produto.quantidade

        item.innerText = `${produto.quantidade} - ${produto.nome} - R$${valorTotal.toFixed(2)}`;


        listaProdutos.appendChild(item)
    }
    atualizarTotal()
    atualizarTroco()
}
// fução responsável por atualizar o total
function atualizarTotal() {
    let total = document.getElementById("total")
    let soma = 0

    for (let i = 0; i < notinha.length; i++) {
        let produto = notinha[i]
        soma += produto.valor*produto.quantidade
        total.innerText = `${soma.toFixed(2)}`
        totalFinal = soma
    }
}

// fução responsável por limpar a notinha
function limparNotinha(){
    notinha = []
    totalFinal = 0

    let total = document.getElementById("total")
    total.innerText = "0.00"

    let displayTroco = document.getElementById("troco")
    displayTroco.innerText = "R$ 0.00"
    atualizarNotinha()
}

// fução responsável por atualizar o troco
function atualizarTroco() {
    let valorPagoInput = document.getElementById("valor-pago")
    let displayTroco = document.getElementById("troco")
    let valorPago = Number(valorPagoInput.value);

    let trocoCalculado = valorPago - totalFinal;

    if (valorPago < totalFinal) {
        displayTroco.innerText = "R$ 0.00";
        alert("dinheiro insuficiente!")
    } else {
        displayTroco.innerText = `R$ ${trocoCalculado.toFixed(2)}`;
    }
}

