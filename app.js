let lista = []; 
let limite = 100;
let numeroaleatorio = gerarnumeroaleatorio();
let tentativa = 1;
mensagemInicial();
//manipular texto no HTML
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';

//Evitar repetição de código com função
function exibirTextonatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextonatela('h1', 'Jogo do número secreto!');
    exibirTextonatela('p', 'Escolha um número entre 1 e 100:');
}

//função gerar numero aleatório
function gerarnumeroaleatorio(){
    let numeroEscolhido = parseInt (Math.random() * limite + 1);
    let quantidadeLista = lista.length;
    if(quantidadeLista == limite){
        lista=[];
    }

    if (lista.includes(numeroEscolhido)){
        return gerarnumeroaleatorio();
    } else {
        lista.push(numeroEscolhido);
        console.log(lista);
        return numeroEscolhido;
    }
}
function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//exiba numero aleatorio no console
function verificarChute(){

    let chute = document.querySelector('input').value;

    if (chute == numeroaleatorio){
        exibirTextonatela('p', 'Acertou!');
        let palavratentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativa} ${palavratentativa}!`;
        exibirTextonatela ('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroaleatorio){
            exibirTextonatela('p','O número secreto é menor!');
        } else {
            exibirTextonatela('p', 'O número secreto é maior!');
        }
        tentativa++;
        limparcampo();
    }
}
 function reiniciarJogo() {
    numeroaleatorio = gerarnumeroaleatorio();
    limparcampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }
