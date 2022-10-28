const menorValor = 0
const maiorValor = 200
const numeroSecreto = geraNumeroAleatorio()

function geraNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor+1)
}
console.log('Nímero Secreto:',numeroSecreto)

const elementoMaiorValor = document.querySelector('#maior-valor')
const elementoMenorValor = document.querySelector('#menor-valor')

elementoMaiorValor.innerHTML = maiorValor
elementoMenorValor.innerHTML = menorValor
