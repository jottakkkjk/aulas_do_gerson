function calcular(operador) {
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var resultado;

    switch (operador) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                resultado = "Não é possível dividir por zero";
            }
            break;
        default:
            resultado = 'Operação inválida';
            break;
    }

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
