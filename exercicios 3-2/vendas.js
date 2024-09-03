var prompt = require('prompt-sync') ();

const v1 = Number(prompt("Digite o numero de vendas do 1° mês:"))
const v2 = Number(prompt("Digite o numero de vendas do 2° mês:"))
const v3 = Number(prompt("Digite o numero de vendas do 3° mês:"))
const v = v1+v2+v3

if (v<5000) {
    console.log("Sem comissão parceiro");
}else if (v >= 5000 && v<=10000) {
    const comissao = v*0.05
     console.log(`Sua comissão é ${comissao.toFixed(2)}`);
}else {
    const comissao = v*0.10
    console.log(`Sua comissão é ${comissao.toFixed(2)}`);
    
}