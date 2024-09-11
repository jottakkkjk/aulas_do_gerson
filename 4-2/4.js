const prompt = require('prompt-sync')();

function contarLetra(palavra, letra) {
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            contador++;
        }
    }
    
    return contador;
}

const palavra = prompt("Digite a palavra: ");
const letra = prompt("Digite a letra para contar: ");

if (palavra && letra) {
    const resultado = contarLetra(palavra, letra);
    console.log(`A letra "${letra}" aparece ${resultado} vez(es) na palavra "${palavra}".`);
} else {
    console.log("Por favor, digite uma palavra e uma letra.");
}
