const prompt = require('prompt-sync')(); 

let quantidadeAlcool = 0;
let quantidadeGasolina = 0;
let quantidadeDiesel = 0;

while (true) {
    const codigo = parseInt(prompt('Digite o código do combustível (1. Álcool, 2. Gasolina, 3. Diesel, 4. Fim): '), 10);

    if (codigo === 1) {
        quantidadeAlcool++;
        console.log('Álcool');
    } else if (codigo === 2) {
        quantidadeGasolina++;
        console.log('Gasolina');
    } else if (codigo === 3) {
        quantidadeDiesel++;
        console.log('Diesel');
    } else if (codigo === 4) {
        console.log('MUITO OBRIGADO');
        break; 
    } else {
        console.log('Código inválido. Digite um código válido.');
    }
}

console.log('Quantidade de clientes que abasteceram cada tipo de combustível:');
console.log(`Álcool: ${quantidadeAlcool}`);
console.log(`Gasolina: ${quantidadeGasolina}`);
console.log(`Diesel: ${quantidadeDiesel}`);
