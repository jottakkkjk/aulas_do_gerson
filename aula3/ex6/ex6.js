function verificarAno() {
    const ano = document.getElementById('ano').value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(ano) || ano <= 0) {
        resultadoDiv.textContent = 'Por favor, insira um ano válido.';
        return;
    }

    const anoNumero = parseInt(ano, 10);

    const bissexto = (anoNumero % 4 === 0 && anoNumero % 100 !== 0) || (anoNumero % 400 === 0);

    if (bissexto) {
        resultadoDiv.textContent = `${anoNumero} é um ano bissexto.`;
    } else {
        resultadoDiv.textContent = `${anoNumero} não é um ano bissexto.`;
    }
}
