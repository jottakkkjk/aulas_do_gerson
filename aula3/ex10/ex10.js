function verificarNumero() {
    const entradaNumero = document.getElementById('entradaNumero');
    const resultado = document.getElementById('resultado');

    const numero = parseInt(entradaNumero.value, 10);

    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, insira um número válido.';
        resultado.style.color = 'red';
    } else {
        if (numero % 2 === 0) {
            resultado.textContent = `O número ${numero} é par.`;
            resultado.style.color = 'green';
        } else {
            resultado.textContent = `O número ${numero} é ímpar.`;
            resultado.style.color = 'blue';
        }
    }
}
