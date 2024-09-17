const prompt = require('prompt-sync')() 
function encontrarMaiorNumero() {
    let input = prompt("Insira os números ");
    
    if (!input) {
        console.log("Nenhum número foi inserido.");
        return;
    }
    
    let numeros = [];
    let numeroAtual = '';
    
    for (let i = 0; i < input.length; i++) {
        let caractere = input[i];
        
        if (caractere === ',' || caractere === ' ') {
            if (numeroAtual !== '') {
                numeros.push(Number(numeroAtual));
                numeroAtual = ''; 
            }
        } else {
            numeroAtual += caractere;
        }
    }
    
    if (numeroAtual !== '') {
        numeros.push(Number(numeroAtual));
    }
    
    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            console.log("Por favor, insira apenas numeros válidos.");
            return;
        }
    }
    
    let maiorNumero = numeros[0]; 
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    
    console.log("O maior número é:", maiorNumero);
}

encontrarMaiorNumero();
