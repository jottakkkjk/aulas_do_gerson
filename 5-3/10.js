const prompt = require('prompt-sync')();
const pessoas = [];

for (let i = 0; i < 2; i++) {
    const nome = prompt("Digite o nome da pessoa: ");
    const idade = parseInt(prompt("Digite a idade da pessoa: "));
    pessoas.push({ nome, idade });
}

const pessoaMaisVelha = pessoas.reduce((maisVelha, pessoaAtual) => {
    return (pessoaAtual.idade > maisVelha.idade) ? pessoaAtual : maisVelha;
});

console.log(`A pessoa mais velha é ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos.`);
