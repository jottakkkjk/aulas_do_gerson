const prompt = require('prompt-sync')();
const entrada = prompt('digite os numeros: ')
const vetor = entrada.split(',').map(Number);

let maiorN = vetor[0]

vetor.forEach(numero =>{
    if (numero >= maiorN){
        maiorN = numero

    }
});
console.log(`o maior numero é: ${maiorN}`)

