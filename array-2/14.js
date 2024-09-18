const prompt = require('prompt-sync')()
    let matriz = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for (let i = 0; i < 3; i++) {
        matriz[i][2 - i] = 1;
    }

    console.log("Matriz com 1s na diagonal secundária 3x3:");
    for (let i = 0; i < 3; i++) {
        console.log(matriz[i].join(' '));
    }


