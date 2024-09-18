const prompt = require('prompt-sync')()
const entrada = prompt('digite os numeros: ')
const elemento = Number(prompt('digite o numero que quer procurar'))
const numeros = entrada.split(',').map(Number)

let encontrar = numeros.indexOf(elemento) !== -1;

console.log(`o elemento ${elemento} esta presente no vetor esta presente no vetor? ${encontrar}`);
