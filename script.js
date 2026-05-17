const variavel = {}
var posicao;
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

function gerarPosicao(min, max) {
    posicao = Math.floor(Math.random() * (max - min + 1)) + min // Math.trunc retorna a parte inteira do número
}

function adicionarNumeros(numero_inicio, numero_fim) {
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        numeros.push(i)//adiciona os valores de i ao Array numeros
    }
}

function sorteadorDeNumeros() {

    if (variavel.resultado.textContent == 'Números sorteados: nenhum até agora') {
        variavel.resultado.innerHTML = ` `
    }
    
    variavel.resultado.innerHTML += `${numeros[posicao]} ` // x+=1 é o mesmo que  x = x + 1, adicionamos sem apagar
    numeros.splice(posicao, 1) // .splice(x,y) vá até a posição X e remova Y elementos"
    variavel.reiniciar.style.backgroundColor = '#8b1eba'

}

function limparCampos() {

    variavel.numeroInicial.value = ``
    variavel.numeroFinal.value = ``
    variavel.quantidadeNumeros.value = ``
    variavel.resultado.innerHTML = ``

}

function verificador(){

    numeroInicial = Number(variavel.numeroInicial.value)
    numeroFinal = Number(variavel.numeroFinal.value)
    quantidadeNumeros = Number(variavel.quantidadeNumeros.value)

    if(!variavel.numeroFinal.value || !variavel.numeroInicial.value || !variavel.quantidadeNumeros.value){
        variavel.resultado.textContent = `Preencha todos os campos`
        return false
    }

    if (numeroFinal <= numeroInicial) {
        limparCampos()
        variavel.resultado.textContent = `O numero inicial deve ser maior que o número final`
        return false
    }
    if(quantidadeNumeros > ((numeroFinal-numeroInicial)+1)){
        limparCampos()
        variavel.resultado.textContent = `A quantidade de números sorteador deve ser menor que a quantidade de números do sorteio`
        return false
    }
    return true

}

function jutsu() {

    if(verificador() == false){
        return 
    }
    variavel.resultado.textContent = ` `

    numeroInicial = Number(variavel.numeroInicial.value)
    numeroFinal = Number(variavel.numeroFinal.value)
    quantidadeNumeros = Number(variavel.quantidadeNumeros.value)

    adicionarNumeros(numeroInicial, numeroFinal)

    for (var j = 0; j < quantidadeNumeros; j++) {
        gerarPosicao(0, numeros.length - 1)
        sorteadorDeNumeros()
    }
    numeros = []

}

function reiniciar() {
    numeros = []
    variavel.reiniciar.style.backgroundColor = '#333'
    posicao;
    limparCampos()
}
