const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang = 'pr-br'

recognition.start()

recognition.addEventeListener('result', onEspeak)

function onEspeak(e){
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificarSeChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML= `
    <div> Você disse </div>
    <span class="box" ${chute}</span> > 
    `
}

recognition.addEventeListener('end',()=> 
recognition.start())