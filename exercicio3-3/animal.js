const prompt = require("prompt-sync")();
const animal = prompt("Digite o nome do animal:").toLowerCase(); 

function animaClass(animal) {
    let categoria;

    switch (true) {
        case ["leao", "tigre", "elefante", "urso", "cavalo"].includes(animal):
            categoria = "Mamifero";
            break;
        case ["aguia", "pato", "papagaio", "galinha", "pardal"].includes(animal):
            categoria = "Ave";
            break;
        case ["cobra", "lagarto", "tartaruga", "jacare", "iguana"].includes(animal):
            categoria = "Réptil";
            break;
        case ["tubarão", "salmao", "badejo", "cavalo-marinho", "atum"].includes(animal):
            categoria = "Peixe";
            break;
        case ["abelha", "borboleta", "mosca", "formiga", "libelula"].includes(animal):
            categoria = "Inseto";
            break;
        default:
            categoria = "Classificação desconhecida";
            break;
    }

    return categoria;
}

const categoria = animaClass(animal);
console.log(`O animal ${animal} é classificado como: ${categoria}`);
