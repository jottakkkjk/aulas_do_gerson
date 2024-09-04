const prompt = require("prompt-sync")();
const mes = Number(prompt("Digite o número do mês (1 a 12):"));

function descobrirEstacao(mes) {
    
let estacao;

switch (mes) {
    case 1:
    case 2:
    case 12:
        estacao = "Verão"
    break;
    case 3: 
    case 4: 
    case 5: 
        estacao = "Primavera"
    break
    case 6:
    case 7:
    case 8:
        estacao = "Inverno"
        break
    case 9:
    case 10:
    case 11:
        estacao = "Outono"   
        break 
    default:
        estacao = "mes invalido"
        break;
}

return estacao
}
const estacao = descobrirEstacao(mes)
console.log(`A estação correspondente ao mês ${mes} é: ${estacao}`);