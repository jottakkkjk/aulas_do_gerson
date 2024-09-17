const prompt = require('prompt-sync')() 
function criarMatrizIdentidade() {
    let matriz = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        matriz[i][i] = 1;
    }

    console.log("Matriz Identidade 3x3:");
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(' '));
    }
}

criarMatrizIdentidade();
