const prompt = require('prompt-sync')()
let matriz = [];

for (let i = 0; i < 2; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        let valor = prompt(`Digite o valor para a posição [${i}][${j}]:`);
        matriz[i][j] = Number(valor); 
    }
}

let maiorValor = matriz[0][0]; 
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        if (matriz[i][j] > maiorValor) {
            maiorValor = matriz[i][j];
        }
    }
}

console.log("Matriz 2x3:");
for (let i = 0; i < 2; i++) {
    console.log(matriz[i].join(' '));
}

console.log("O maior valor na matriz é:", maiorValor);
