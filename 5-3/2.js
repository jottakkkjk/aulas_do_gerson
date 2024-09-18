const pessoas = [
    { nome: 'Luiz', idade: 19 },
    { nome: 'Maria', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Ana', idade: 27 },
    { nome: 'Pedro', idade: 22 },
    { nome: 'Fernanda', idade: 30 },
    { nome: 'Carlos', idade: 18 },
    { nome: 'Julia', idade: 34 },
    { nome: 'Ricardo', idade: 26 },
    { nome: 'Sofia', idade: 21 }
];
const media = pessoas.reduce((acc, pessoas  )=> acc + pessoas.idade, 0)
const mediaIdade = media / (pessoas.length);
console.log("A média de idade é:",media,pessoas.length,  mediaIdade);
