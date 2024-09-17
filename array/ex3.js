const prompt = require("prompt-sync")();

const cor = [
    "azul",
    "vermelho",
    "roxo"
]

const corUsuario = prompt("Insira uma cor:").toLowerCase();

let encontrado = false;
for (let i = 0; i < cor.length; i++) {
    if (corUsuario === cor[i]) {
        console.log(`A cor ${corUsuario} está na posição ${i} do array.`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`A cor ${corUsuario} não foi encontrada no array.`);
}