let vetor = [3, 7, 2];

function encontrarMaiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

let maiorNumero = encontrarMaiorNumero(vetor);
console.log(maiorNumero); 
