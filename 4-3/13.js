const prompt = require('prompt-sync')(); 

const quantidadeAlunos = parseInt(prompt('Digite a quantidade de alunos na turma: '), 10);

if (quantidadeAlunos <= 0) {
    console.log('Quantidade de alunos deve ser maior que zero.');
} else {
    let somaNotas = 0;

    for (let i = 1; i <= quantidadeAlunos; i++) {
        const nota = parseFloat(prompt(`Digite a nota do aluno ${i}: `));
        somaNotas += nota;
    }

    const media = somaNotas / quantidadeAlunos;

    console.log(`A média das notas é: ${media.toFixed(2)}`);
}
