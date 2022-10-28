function verificarSeChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += 
        '<div> Valor Inaválido</div>'
        return 
    }

    if(numeroForMaiorQueONumeroPermitido(numero)){
       elementoChute.innerHTML += `
       <div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
       `
       return
    }
    if(numero === numeroSecreto){
        `
        <h2> Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}

        <button id="jogar-novamente"
        class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorQueONumeroPermitido(numero){
    return numero > maiorValor || numero < menorValor

}

document.body.addEventListener("click", e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})