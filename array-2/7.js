const prompt = require('prompt-sync')()
const n = prompt('digite os numeros: ')
const vetor = n.split(',').map(Number)

let v = vetor[0]
let soma = 0

vetor.forEach(num => soma +=num)
const m = soma / vetor.length

console.log(`a media dos elementos é: ${m}`);
