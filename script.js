const variavel = {}
var numeroAleatorio;
let numeros = []

function gerarvariaveis(nome, tag, id) {
    variavel[nome] = document.querySelector(`${tag}#${id}`)
}

gerarvariaveis('quantidadeNumeros', 'input', 'quantidade')
gerarvariaveis('numeroInicial', 'input', 'do-numero')
gerarvariaveis('numeroFinal', 'input', 'ate-numero')
gerarvariaveis('sortear', 'button', 'sortear')
gerarvariaveis('reiniciar', 'button', 'reiniciar')
gerarvariaveis('resultado', 'p', 'texto-resultado')

function gerarNumeroAleatorio(min, max) {
    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min // Math.trunc retorna a parte inteira do número
}

function adicionarNumeros(numeroAleatorioAdicionado) {
    for (let i = 0; i <= numeroAleatorioAdicionado; i++) {
        numeros.push(i)//adiciona os valores de i ao Array numeros
    }
}

function limparCampos() {
    variavel.numeroInicial.value = ``
    variavel.numeroFinal.value = ``
    variavel.quantidadeNumeros.value = ``
    variavel.resultado.innerHTML = ``
}

function sorteadorDeNumeros() {
    numeroInicial = Number(variavel.numeroInicial.value)
    numeroFinal = Number(variavel.numeroFinal.value)

    gerarNumeroAleatorio(numeroInicial, numeroFinal)
    adicionarNumeros(numeroAleatorio)

    if(variavel.resultado.textContent == 'Números sorteados: nenhum até agora'){
        variavel.resultado.innerHTML = ` `
    }

    variavel.resultado.innerHTML += `${numeros[numeroAleatorio]} ` // x+=1 é o mesmo que  x = x + 1
    numeros.splice(1,numeroAleatorio) // remove 1 item na posição numero aleatório
    variavel.reiniciar.style.backgroundColor = '#8b1eba'
}

function jutsu(){
    quantidadeNumeros = Number(variavel.quantidadeNumeros.value)
    for(var j = 0;j<quantidadeNumeros;j++){
        sorteadorDeNumeros()
    }
}
function reiniciar() {
    numeros = []
    variavel.reiniciar.style.backgroundColor = '#333'
    numeroAleatorio;
    limparCampos()
}