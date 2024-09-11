const prompt = require('prompt-sync')(); 

while (true) {
    const valor = parseInt(prompt('Digite um valor inteiro: '), 10);

    if (valor <= 0) {
        console.log('Programa encerrado.');
        break;
    }

    if (valor % 2 === 0) {
        console.log(`${valor} é PAR.`);
    } else {
        console.log(`${valor} é ÍMPAR.`);
    }
}
