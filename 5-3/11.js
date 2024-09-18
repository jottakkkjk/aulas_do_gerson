const prompt = require('prompt-sync')();

const produtos = [
    { nome: 'Produto A', preco: 30, categoria: 'eletrônicos' },
    { nome: 'Produto B', preco: 20, categoria: 'livros' },
    { nome: 'Produto C', preco: 50, categoria: 'eletrônicos' },
    { nome: 'Produto D', preco: 15, categoria: 'roupas' },
    { nome: 'Produto E', preco: 40, categoria: 'livros' },
];

function filtrarPorCategoria(produtos, categoria) {
    return produtos.filter(produto => produto.categoria === categoria);
}

const categoriaDesejada = prompt("Digite a categoria desejada: ");
const produtosFiltrados = filtrarPorCategoria(produtos, categoriaDesejada);

if (produtosFiltrados.length > 0) {
    console.log(`Produtos na categoria "${categoriaDesejada}":`, produtosFiltrados);
} else {
    console.log(`Nenhum produto encontrado na categoria "${categoriaDesejada}".`);
}
