
const taxaCambio = {
    usd: 5.55, 
    eur: 6.17
};
function converter(){
    const valorBRL = parseFloat(document.getElementById('valor-brl').value)
    const moeda = document.getElementById('moeda').value;


    if(isNaN(valorBRL)|| valorBRL <= 0  ){
        alert('Por favor, insira um valor válido em reais.');
        return;
    }
    const resultado = valorBRL * taxaCambio[moeda]
    const moedaNome = moeda === 'usd' ? 'Dólares (USD)' : 'Euros (EUR)';
    
    document.getElementById('resultado-texto').textContent = 
    `R$ ${valorBRL.toFixed(2)} é igual a ${resultado.toFixed(2)} ${moedaNome}.`;
}