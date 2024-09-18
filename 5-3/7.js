const prompt = require('prompt-sync')()
const alunos = [];

for (let i = 0; i < 5; i++) { 
    const nome = prompt("Digite o nome do aluno:");
    const nota = parseFloat(prompt("Digite a nota do aluno:"));
    alunos.push({ nome, nota });
}

const alunosAprovados = alunos.filter(aluno => aluno.nota > 7);

console.log("Alunos aprovados:", alunosAprovados);
