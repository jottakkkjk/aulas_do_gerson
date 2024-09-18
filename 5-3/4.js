const produtos = [
    { nome: "Camiseta", preco: 29.90, categoria: "Roupas" },
    { nome: "Calça Jeans", preco: 89.90, categoria: "Roupas" },
    { nome: "Tênis", preco: 199.90, categoria: "Calçados" },
    { nome: "Jaqueta", preco: 159.90, categoria: "Roupas" },
    { nome: "Boné", preco: 39.90, categoria: "Acessórios" },
    { nome: "Moletom", preco: 79.90, categoria: "Roupas" },
    { nome: "Cinto", preco: 49.90, categoria: "Acessórios" },
    { nome: "Camisa Social", preco: 69.90, categoria: "Roupas" },
    { nome: "Shorts", preco: 59.90, categoria: "Roupas" },
    { nome: "Meias", preco: 19.90, categoria: "Roupas" }
];

const contagemCategorias = produtos.reduce((acc, produto) => {
    acc[produto.categoria] = (acc[produto.categoria] || 0) + 1; 
    return acc;
}, {});

console.log(contagemCategorias);
