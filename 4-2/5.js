const prompt = require('prompt-sync')()
let ano = parseInt(prompt("Digite um ano: "));

while (ano !== 0) {
  if (ano === 1942 || ano === 1946) {
    console.log(`O ano ${ano} não é um ano de Copa do Mundo.`);
  } else if ((ano - 1930) % 4 === 0) {
    console.log(`O ano ${ano} é um ano de Copa do Mundo.`);
  } else {
    console.log(`O ano ${ano} não é um ano de Copa do Mundo.`);
  }
  ano = parseInt(prompt("Digite outro ano (ou 0 para sair): "));
}