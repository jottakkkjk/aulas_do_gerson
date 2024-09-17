const prompt = require('prompt-sync')()
function verificarNome() {
    let nomes = [
        "Ana", "Carlos", "Mariana", "Pedro", "Lucas",
        "Julia", "Fernando", "Isabela", "Roberto", "Larissa"
    ];
    
    let nomeParaBuscar = prompt("Insira o nome que deseja verificar:");

    let encontrado = nomes.includes(nomeParaBuscar);

    if (encontrado) {
        console.log("ACHEI");
    } else {
        console.log("NÃO ACHEI");
    }
}

verificarNome();
