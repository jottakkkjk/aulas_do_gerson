const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
  ];
  
  const stringsFormatadas = pessoas.map((pessoa) => {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
  });
  
  console.log(stringsFormatadas);