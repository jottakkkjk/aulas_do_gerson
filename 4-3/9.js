const prompt = require('prompt-sync')();    

const valor = parseInt(prompt('Digite um valor maior que ZERO: '), 10);

if (valor > 0) {
    console.log(`Números de 1 até ${valor}:`);
    for (let i = 1; i <= valor; i++) {
        console.log(i);
    }
} else {
    console.log('O valor deve ser maior que ZERO.');
}
