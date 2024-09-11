let quantLinha = 4;
let quantEspac = quantLinha - 1;
for (let linha = 0; linha < quantLinha; linha++){
    let l = '';
    for (let espaco = 0; espaco < quantEspac; espaco++){
        l += ' ';
    }
    for (let asterisco = 0; asterisco <= linha; asterisco++){
        l += '* ';
    }
    console.log(l); 
    quantEspac--;
}