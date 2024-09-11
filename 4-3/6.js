const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt('Digite o primeiro valor: '));
let valor2 = parseFloat(prompt('Digite o segundo valor: '));

while (valor2 === 0) {
    console.log('VALOR INVÁLIDO. O divisor não pode ser zero.');
    valor2 = parseFloat(prompt('Digite um novo valor para o divisor: '));
}

const resultado = valor1 / valor2;

console.log(`O resultado da divisão de ${valor1} por ${valor2} é: ${resultado.toFixed(2)}`);
