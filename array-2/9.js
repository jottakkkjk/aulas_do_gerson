const prompt = require('prompt-sync')()
function preencherVetor(n) {
    if (isNaN(n) || n <= 0) {
        console.log("Por favor, insira um número válido maior que 0.");
        return;
    }

    let vetor = [];

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            vetor.push("Par");
        } else {
            vetor.push("Ímpar");
        }
    }

    console.log("Vetor preenchido:", vetor);
}

let tamanho = prompt("Insira o número de elementos do vetor:");
preencherVetor(Number(tamanho));
