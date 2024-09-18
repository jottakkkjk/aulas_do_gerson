const prompt = require('prompt-sync')()
    let matriz = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (j > i) {
                matriz[i][j] = 0;
            }
        }
    }

    console.log("Matriz 3x3 com 1s na diagonal principal e 0s acima dela:");
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(' '));
    }


