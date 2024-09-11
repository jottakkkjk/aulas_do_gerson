const prompt = require('prompt-sync')(); 

let continuar = '1'; 

while (continuar === '1') {
    const nota1 = parseFloat(prompt('Digite a primeira nota: '));
    const nota2 = parseFloat(prompt('Digite a segunda nota: '));

    const media = (nota1 + nota2) / 2;

    console.log(`A média final é: ${media.toFixed(2)}`);

    continuar = prompt('Calcular a média de outro aluno? 1. Sim 2. Não: ');

    if (continuar !== '1' && continuar !== '2') {
        console.log('Resposta inválida. Encerrando o programa.');
        continuar = '2'; 
    }
}

console.log('Programa encerrado.');