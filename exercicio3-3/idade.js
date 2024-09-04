const prompt = require("prompt-sync")()
const idade = Number(prompt("Digite a idade da pessoa:"))

function determinaCategoria(idade) {
    
let categoria
switch (true) {
    case (idade >=0 && idade<=12):
        categoria = "Criança"
        break;
    case (idade >= 13 && idade <=17):
        categoria = "Adolescente"
    break
    case (idade >= 18 && idade <= 64):
        categoria = "adulto"
    break
    case (idade >= 65):
        categoria = "Idoso"
    break
        default:
        categoria = "idade invalida"
        break;
}

return categoria
}
const categoria = determinaCategoria(idade)
console.log(`Sua Idade é ${idade} e a sua categoria é ${categoria}`);
