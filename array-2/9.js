const prompt = require('prompt-sync')()
const n = parseInt(prompt('digite o numero de elementos: '))
let array = [];

for (let i = 0; i < n; i++){
    if (i % 2 !== 0){
        array.push("Impar");
    }
        else {
            array.push("Par");
        }
    }
    console.log('Array preenchido: ');
    console.log(array);
    