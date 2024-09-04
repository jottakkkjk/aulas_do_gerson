const prompt = require("prompt-sync")();

const vei = Number(prompt("Digite o numero 1 ou 2:"));

switch(vei) {
  case 1:
    console.log("Nome: GOl, peso: 2,5 toneladas, tanque: 30 litros, valor: R$30.000,00");
    break;
  case 2:
    console.log("Nome: CG 160, peso: 180kg, tanque: 16 litros, valor: R$18.000,00");
    break;
  default:
    console.log("Não tenho este veículo");
}


//código feito no terminal do linux
