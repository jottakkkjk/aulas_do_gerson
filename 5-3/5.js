const nomes = ['Ana', 'João', 'Pedro'];

const nomesObjeto = nomes.reduce((acc, nome) => {
    acc[nome] = nome.length;
    return acc;
}, {});

console.log(nomesObjeto);
