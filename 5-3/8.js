const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizMultiplicada = matriz.map(linha => 
    linha.map(valor => valor * 2)
);

console.log(matrizMultiplicada);
