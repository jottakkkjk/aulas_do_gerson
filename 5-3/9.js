const listas = [
    ["maçã", "banana"],
    ["laranja", "uva"],
    ["morango", "kiwi"]
];

const listaConcatenada = listas.reduce((acc, lista) => acc.concat(lista), []);

console.log(listaConcatenada);
