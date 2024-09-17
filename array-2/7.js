const prompt = require('prompt-sync')() 
function calcularMedia() {
    let input = prompt("Insira os números separados: ");
    
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
            console.log("Por favor, insira apenas números válidos.");
            return;
        }
    }
    
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    
    let media = soma / numeros.length;
    
    console.log("A média dos números é:", media);
}

calcularMedia();

