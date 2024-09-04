const prompt = require("prompt-sync")()
const numeroCartao = prompt("Digite o número do cartão de crédito:");

function validaNumero(numeroCartao) {
    numeroCartao = numeroCartao.replace(/\D/g,"")

    if (numeroCartao.length !== 16) {
        console.log("Número de cartão inválido: deve ter exatamente 16 dígitos.");
        return
    }

    const primeiroDigito = numeroCartao.charAt(0)

    if (primeiroDigito !== '4' && primeiroDigito !== '5' && primeiroDigito !== '6') {
        console.log("Número de cartão inválido: deve começar com 4 (Visa), 5 (Mastercard) ou 6 (Discover).");
    }else if (primeiroDigito === '4') {
        console.log("Seu cartão é Visa");
        
    }else if (primeiroDigito === '5') {
        console.log("Seu cartão é Mastercard");
    }else if (primeiroDigito === '6') {
        console.log("Seu cartão é Discover");
    }else{
        console.log("Não sei qual é o seu cartão");
        
    }

}
validaNumero(numeroCartao);

