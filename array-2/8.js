const prompt = require('prompt-sync')()
function verificarElementoNoVetor() {
    let input = prompt("Insira os números: ");
    
    if (!input) {
        console.log("Nenhum número foi inserido.");
        return;
    }
    
    let vetor = [];
    let numeroAtual = '';
    
    for (let i = 0; i < input.length; i++) {
        let caractere = input[i];
        
        if (caractere === ',' || caractere === ' ') {
            if (numeroAtual !== '') {
                vetor.push(Number(numeroAtual));
                numeroAtual = ''; 
            }
        } else {
            numeroAtual += caractere;
        }
    }
    
    if (numeroAtual !== '') {
        vetor.push(Number(numeroAtual));
    }
    
    for (let i = 0; i < vetor.length; i++) {
        if (isNaN(vetor[i])) {
            console.log("Por favor, insira apenas números válidos.");
            return;
        }
    }
    
    let elemento = prompt("Insira o número que deseja verificar:");
    
    let elementoNumero = Number(elemento);
    if (isNaN(elementoNumero)) {
        console.log("O elemento deve ser um número válido.");
        return;
    }
    
    let encontrado = false;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === elementoNumero) {
            encontrado = true;
            break;
        }
    }
    
    if (encontrado) {
        console.log("true");
    } else {
        console.log("false");
    }
}

verificarElementoNoVetor();
