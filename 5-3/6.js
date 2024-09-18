const produtos = [
    { nome: "Camiseta", preco: 29.90 },
    { nome: "Calça Jeans", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 },
    { nome: "Jaqueta", preco: 159.90 },
    { nome: "Boné", preco: 39.90 },
    { nome: "Moletom", preco: 79.90 },
    { nome: "Cinto", preco: 49.90 },
    { nome: "Camisa Social", preco: 69.90 },
    { nome: "Shorts", preco: 59.90 },
    { nome: "Meias", preco: 19.90 }
];
const soma = produtos.reduce((acc, produtos  )=> acc + produtos.preco, 0).toFixed(2)
console.log(soma);

