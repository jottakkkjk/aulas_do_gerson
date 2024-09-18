const produtos = [
    { nome: 'Produto 1', preco: 30 },
    { nome: 'Produto 2', preco: 60 },
    { nome: 'Produto 3', preco: 20 },
    { nome: 'Produto 4', preco: 80 },
    { nome: 'Produto 5', preco: 40 }
  ];
  
  const produtosAgrupados = produtos.reduce((acumulador, produto) => {
    if (produto.preco > 50) {
      acumulador.maisDe50.push(produto);
    } else {
      acumulador.menosOuIgual50.push(produto);
    }
    return acumulador;
  }, { maisDe50: [], menosOuIgual50: [] });
  
  console.log('Produtos que custam mais de R$50:');
  console.log(produtosAgrupados.maisDe50);
  console.log('Produtos que custam menos ou igual a R$50:');
  console.log(produtosAgrupados.menosOuIgual50);